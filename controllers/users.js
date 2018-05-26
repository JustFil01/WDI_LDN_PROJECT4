const User = require('../models/user');
//---------INDEX----------------------------------------------------------------
function usersIndex(rew, res, next){
  User
    .find()
    .then(users => res.json(users))
    .catch(next);
}
//----------SHOW----------------------------------------------------------------
function usersShow(req, res, next){
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(400);
      res.json(user);
    })
    .catch(next);
}
//-----------DELETE-------------------------------------------------- ----------
function usersDelete(req, res, next){
  User
    .findByIdAndRemove(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404);
      return user.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}
//-----------UPDATE--------------------------------------------------------- ---
function usersUpdate(req, res, next){
  User
    .findById(req.params.id)
    .then(user => Object.assign(user, req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = {
  index: usersIndex,
  show: usersShow,
  delete: usersDelete,
  update: usersUpdate
};
