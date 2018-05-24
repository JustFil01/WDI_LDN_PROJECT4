const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  'id': {type: Number},
  'name': {type: String},
  'created_at': {type: Number},
  'updated_at': {type: Number},
  'summary': {type: String},
  'collection': {type: Number},
  'popularity': {type: Number},
  'cover': {
    'url': {type: Number},
    'width': {type: Number},
    'height': {type: Number}
  },
  'websites': [
    {
      'category': {type: Number},
      'url': {type: Number}
    }
  ]
});

module.exports = mongoose.model('Game', gameSchema);
