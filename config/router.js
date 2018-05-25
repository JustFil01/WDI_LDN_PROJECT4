const router = require('express').Router();
const games = require('../controllers/games');

router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .delete(games.delete)
  .get(games.show)
  .put(games.update);

router.route('/games/:id/reviews')
  .get(games.indexReview)
  .post(games.createReview);

router.route('/games/:id/reviews/:reviewId')
  .get(games.showReview);

module.exports = router;
