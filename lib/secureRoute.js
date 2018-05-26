const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Promise = require('bluebird');
const User =  require('../models/user');
//------------------------------------------------------------------------------
function secureRoute(req, res, next){
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  const token = req.headers.authorization.replace('Bearer ', '');

  new Promise((resolve, reject) => { // use of promise is to avoid callback hell.

    jwt.verify(token, secret, (err, payload) =>{ // 3 arguments being passwed.
      if(err) reject(err);
      return resolve(payload); // resolve and reject are the basis for any promise
      // use of Promise resolves the triangle of death with mutiple error handling. with loads of callbacks.
    });
  })
    .then(payload => User.findById(payload.sub)) // passes the payload to the user and stores payload.sub
    .then(user => {
      if(!user) return res.status(401).json({ message: 'Unauthorized' });
      // setting user for the storage of the user inside the website .
      req.currentUser = user;
      next(); // next piece of middleware.
    })
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = secureRoute;
