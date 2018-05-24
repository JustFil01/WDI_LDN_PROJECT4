const router = require('express');
const games = require('../controllers/games');

router.route('/games')
  .get(games.index);
