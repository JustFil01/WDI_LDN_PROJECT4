const Game = require('../models/game');
//-----------INDEX--------------------------------------------------------- ---
function indexRoute(req, res, next){
  Game
    .find()
    .then(games => res.json(games))
    .catch(next);
}
//-----------SHOW--------------------------------------------------------- ---

function showRoute(req,res,next){
  Game
    .findById(req.params.id)
    .then(games => res.json(games))
    .catch(next);
}
//-----------CREATE--------------------------------------------------------- ---
function createRoute(req,res,next){
  Game
    .create(req.body)
    .then(games => res.status(201).json(games))
    .catch(next);
}
//-----------DELETE--------------------------------------------------------- ---

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
//-----------UPDATE--------------------------------------------------------- ---
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
//-----------REViEW CREATE------------------------------------------------------
function reviewCreateRoute(req, res, next){
  req.body.postedBy = req.currentUser;
  Game
    .findById(req.params.id)
    .then(game => {
      game.reviews.push(req.body);
      return game.save();
    })
    .then(game => res.json(game))
    .catch(err => {
      next(err);
    });
}
//-----------REViEW GAME CREATE------------------------------------------------------

// function gamesNewReviewCreate(req, res, next){
//   req.body.postedBy = req.currentUser;
//   Game
//     .create(req.body.game)
//     .then(game => {
//       game.reviews.push(req.body);
//       return game.save();
//     })
//     .then(game => res.json(game))
//     .catch(err => {
//       next(err);
//     });
// }
//-----------REViEW INDEX------------------------------------------------------
function reviewIndexRoute(req, res, next) {
  Game
    .findById(req.params.id)
    .then(game => {
      if(!game) return res.sendStatus(404);
      res.json(game.reviews);
    })
    .catch(next);
}
//-----------REViEW SHOW------------------------------------------------------
function reviewShowRoute(req, res, next) {
  Game
    .findById(req.params.id)
    .then(game => {
      if(!game) return res.sendStatus(404);
      const review = game.reviews.id(req.params.reviewId);
      res.json(review);
    })
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  createReview: reviewCreateRoute,
  indexReview: reviewIndexRoute,
  showReview: reviewShowRoute
  // createGameReview: gamesNewReviewCreate
};
