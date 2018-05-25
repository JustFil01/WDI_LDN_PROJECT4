const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  'id': {type: Number},
  'name': {type: String},
  'created_at': {type: Number},
  'updated_at': {type: Number},
  'summary': {type: String},
  'popularity': {type: Number},
  'review': {type: String},
  'screenshots': [
    {
      'url': {type: String},
      'cloudinary_id': {type: String},
      'width': 1920,
      'height': 1080
    }],
  'videos': [
    {
      'name': {typ: String},
      'video_id': {type: String}
    }],
  'release_dates': [
    {
      'category': {type: Number},
      'platform': {type: Number},
      'date': {type: Number},
      'region': {type: Number},
      'human': {type: String},
      'y': {type: Number},
      'm': {type: Number}
    }],
  'cover': {
    'url': {type: String},
    'cloudinary_id': {type: String},
    'width': {type: Number},
    'height': {type: Number}
  },
  'websites': [
    {
      'category': {type: Number},
      'url': {type: String}
    }
  ]
});

module.exports = mongoose.model('Game', gameSchema);
