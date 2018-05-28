const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//------------------------------------------------------------------------------
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String},
  profile: { type: String}
});
//------------------------------------------------------------------------------
userSchema.plugin(require('mongoose-unique-validator'));
// taking out the password form the user object .when the kson method is called we can cahnge the the bojvect itself to change the userobject .
// security measure.
userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password;
    return json;
  }
});
//------------------------------------------------------------------------------
// compares the passwords that is encrypt and the data stored
userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};
//------------------------------------------------------------------------------
// only works when we send to data to the server , this is a set .Holding onto the password confirmation
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });
//------------------------------------------------------------------------------
//Before (pre) any function 'saves' something, run this function to encrypt the password before it is stored:
userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});
//------------------------------------------------------------------------------
// checks for modification and then hashes the password with magic gensaltsync
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});
//------------------------------------------------------------------------------
module.exports = mongoose.model('User', userSchema);
