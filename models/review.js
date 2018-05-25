const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  'picture': {type: String},
  'title': {type: String},
  'subtitle': {type: String},
  'content': {type: String},
  'postedBy': {type: mongoose.Schema.ObjectId, ref: 'User'},
  'rating': {type: Number, min: 1, max: 10},
  'game': {type: mongoose.Schema.ObjectId, ref: 'Game'}
});

module.exports = mongoose.model('Review', reviewSchema);
