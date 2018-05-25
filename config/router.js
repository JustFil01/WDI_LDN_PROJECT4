const router = require('express').Router();
const games = require('../controllers/games');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .delete(games.delete)
  .get(games.show)
  .put(games.update);

router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);

router.route('/games/:id/reviews/:reviewId')
  .get(games.showReview);

router.route('/games/:id/reviews')
  .get(games.indexReview)
  .post(games.createReview);

module.exports = router;
