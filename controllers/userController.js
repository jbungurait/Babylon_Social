const { Users, Thoughts } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await Users.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getUserById(req, res) {
        try {
            const user = await Users.findOne({_id: req.params.userId})
                .select('-__v');

            if (!user) {
                res.status(404).json({message: 'No user by that Id.'});
                return;
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try { 
            const newUser = await Users.create(req.body);
            res.json(newUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await Users.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true},
                );
            if (!user) {
                res.json({message: 'No user by that Id.'});
                return;
            };

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await Users.findOneAndRemove({_id: req.params.userId});

            if (!user) {
                res.status(404).json({message: 'No user by that Id.'});
                return;
            }
            await Thoughts.deleteMany({_id: {$in: user.thoughts}});
            res.json({message: 'User and data delted.'});

        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addFriend(req, res) {
        try {
            const user = await Users.findOneAndUpdate(
                { _id: req.params.userId},
                // { $unwind: {friends}},
                { $addToSet: {friends: req.params.friendId}},
                { new: true });

                if (!user) {
                    res.status(404).json({message: 'No user by that Id.'});
                    return;
                };

                res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await Users.findOneAndUpdate(
                { _id: req.params.userId},
                { $pull: {friends: req.params.friendId}},
                { new: true });

            if (!user) {
                res.status(404).json({message: 'No user by that Id.'});
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};