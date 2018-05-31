const router = require('express').Router();
const users = require('../controllers/users');
const games = require('../controllers/games');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const getgame = require('../controllers/getgame');
//------------------------------------------------------------------------------
router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .delete(secureRoute, games.delete)
  .get(games.show)
  .put(games.update);
//------------------------------------------------------------------------------
router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .delete(secureRoute, users.delete)
  .put(users.update);
//------------------------------------------------------------------------------
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);
//------------------------------------------------------------------------------
router.route('/games/:id/reviews/:reviewId')
  .get(games.showReview)
  .delete(secureRoute, games.deleteReview);

router.route('/games/:id/reviews')
  // .get(games.indexReview)
  .post(secureRoute, games.createReview);

router.route('/getgame')
  .get(getgame.getGame);
//------------------------------------------------------------------------------
module.exports = router;
