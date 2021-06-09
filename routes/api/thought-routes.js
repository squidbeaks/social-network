const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)

router
  .route('/:id')
  .get(getThoughtById)
  .post(createReaction)
  .put(updateThought)
  .delete(deleteThought)

router
  .route('/:thoughtId/:reactionId')
  .delete(deleteReaction)

module.exports = router;
