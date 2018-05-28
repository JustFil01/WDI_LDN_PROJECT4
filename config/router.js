const router = require('express').Router();
const users = require('../controllers/users');
const games = require('../controllers/games');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
//------------------------------------------------------------------------------
router.route('/games')
  .get(games.index)
  .post(games.create); // user with pre selection or admin

router.route('/games/:id')
  .delete(secureRoute, games.delete) // admin
  .get(games.show)
  .put(games.update); // for review posting
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
  .get(games.showReview);

router.route('/games/:id/reviews')
  .get(games.indexReview)
  .post(games.createReview);
//------------------------------------------------------------------------------
module.exports = router;
