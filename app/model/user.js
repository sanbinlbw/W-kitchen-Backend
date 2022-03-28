'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    id: {
      type: Number,
    },
    account: {
      type: String,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
  });
  return mongoose.model('User', UserSchema);
};
