'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const pageSchema = new Schema({
    userId: {
      type: Number,
    },
    pageId: {
      type: String,
    },
    schema: {
      type: Object,
    },
  });
  return mongoose.model('Schema', pageSchema);
};
