const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    postThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/')
.get(getThoughts)
.post(postThought);

router.route('/:thoughtId')
.get(getThoughtById)
.delete(deleteThought)
.put(updateThought);

router.route('/:thoughtId/reaction')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;