const mongoose = require('mongoose'); //require mongoose package
const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

const userSchema = new Schema({
    email: String,
    displayName: String,
    imgUrl: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;