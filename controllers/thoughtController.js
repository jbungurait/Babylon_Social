const { Users, Thoughts } = require('../models');

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
            }
            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postThought(req, res) {
        try {
            const thought = await Thoughts.create(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true },
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
                res.status(404).json({message: 'No thought found.'})
            }
                res.json(thought);
        } catch (err) {

        }
    }
};