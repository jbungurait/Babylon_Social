const { Schema, model } = require("mongoose");

const reactionsSchema = new Schema({
    reactionId: {},
    reactionBody: { type: String, required: true, validate: [length, 280] },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
  });
  
  const Reactions = model('Reactions', reactionsSchema);

const thoughtsSchema = new Schema(
  {
    thoughtText: { type: String, required: true, validate: [length, 1 - 280] },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
    username: { type: String, required: true, refrences: [User] },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'Reactions' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;
