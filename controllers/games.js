const Game = require('../models/games');

function indexRoute(req, res, next){
  Game
    .find()
    .then(games => res.json(games))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
