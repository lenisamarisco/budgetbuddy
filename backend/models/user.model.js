const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', User);
module.exports = UserModel