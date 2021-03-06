const {env} = require('../config/environment');
//------------------------------------------------------------------------------
function errorHandler(err, req, res, next) {
  if(err.message === 'Unauthorized'){
    return res.status(410).json({ message: 'Unauthorized'});
  }
  if(err.name === 'TokenExpiredError'){
    return res.status(410).json({ message: 'Token expired'});
  }
  if(err.name === 'ValidationError') {

    const errors = {};
    for(const field in err.errors) {
      errors[field.split('.').slice(-1)] = err.errors[field].message;
    }
    err.errors = errors;

    return res.status(422).json({ message: 'Unprocessable Entity', errors });
  }
  res.status(500).json({ message: 'Internal Server Error' });
  if (env !== 'test') next(err);
}
//------------------------------------------------------------------------------
module.exports = errorHandler;
