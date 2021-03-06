const mongoose = require('mongoose');
//------------------------------------------------------------------------------
const reviewSchema = new mongoose.Schema({
  'picture': {type: String},
  'title': {type: String ,  required: 'This field is required'},
  'subtitle': {type: String,required: 'This field is required'},
  'content': {type: String, required: 'This field is required'},
  'postedBy': {type: mongoose.Schema.ObjectId, ref: 'User'},
  'rating': {type: Number, min: 1, max: 10}
});
//------------------------------------------------------------------------------
const gameSchema = new mongoose.Schema({
  'igdbId': {type: Number},
  'name': {type: String},
  'created_at': {type: Number},
  'updated_at': {type: Number},
  'summary': {type: String},
  'popularity': {type: Number},
  'reviews': [ reviewSchema],
  'screenshots': [{
    'url': {type: String},
    'cloudinary_id': {type: String},
    'width': {type: Number},
    'height': {type: Number}
  }],
  'videos': [{
    'name': {typ: String},
    'video_id': {type: String}
  }],
  'release_dates': [{
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
  'websites': [{
    'category': {type: Number},
    'url': {type: String}
  }]
});
//------------------------------------------------------------------------------
module.exports = mongoose.model('Game', gameSchema);
