const { Thoughts } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try { 
            const thoughts = await Thoughts.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getThoughtById(req, res) {
        try {
            const thought = await Thoughts.findOne({ _id: req.params.thoughtId})
            .select('-__v');

            if (!thought) {
                res.status(404).json({message: 'No thought found.'});
                return;
            }

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postThought(req, res) {
        try {
            const thought = await Thoughts.create(
                req.body,
            )
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body},
                { runValidators: true, new: true });

            if (!thought) {
                res.status(404).json({message: 'No thought found.'});
                return;
            }
                res.json(thought);
        } catch (err) {

        }
    },
    async deleteThought (req,res) {
        try {
            const thought = await Thoughts.findByIdAndDelete(
                {_id: req.params.thoughtId});
            if (!thought) {
                res.status(404).json({message: 'No thought found.'});
                return;
            }
            res.json({message: 'Entry deleted.'});
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    async createReaction(req, res) {
        try {
            const thought = await Thoughts.findByIdAndUpdate(
                { _id: req.params.thoughtId},
                { $addToSet: { reactions: req.body }},
                { runValidators: true, new: true},
                );

                if (!thought) {
                    res.status(404).json('No reaction found.');
                    return;
                }
                res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thought = await Thoughts.findByIdAndUpdate(
                { _id: req.params.thoughtId},
                { $pull: {reactions: {reactionId: req.params.reactionId}}},
                { runValidators: true, new: true},
            );
            if (!thought) {
                res.status(404).json({message: 'No thought found.'});
                return;
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}; 