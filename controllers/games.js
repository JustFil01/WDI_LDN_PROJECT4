const Game = require('../models/game');

function indexRoute(req, res, next){
  Game
    .find()
    .then(games => res.json(games))
    .catch(next);
}
function showRoute(req,res,next){
  Game
    .findById(req.params.id)
    .then(games => res.json(games))
    .catch(next);
}
function createRoute(req,res,next){
  Game
    .create(req.body)
    .then(games => res.status(201).json(games))
    .catch(next);
}
function deleteRoute(req,res,next){
  Game
    .findById(req.params.id)
    .then(game => {
      if(!game) return res.sendStatus(404);
      return game.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}
function updateRoute(req,res,next){
  Game
    .findById(req.params.id)
    .then(game => {
      if(!game) return res.sendStatus(404);
      return Object.assign(game, req.body);
    })
    .then(game => game.save())
    .then(game => res.json(game))
    .catch(next);
}
module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
