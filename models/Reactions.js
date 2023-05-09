const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema({
    reactionId: {type: Types.ObjectId,
    default: () => new Types.ObjectId()},
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  });

  module.exports = reactionsSchema;

