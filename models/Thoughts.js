const { Schema, model, Types } = require("mongoose");
const reactionsSchema = require("./Reactions");


const thoughtsSchema = new Schema(
  {
    thoughtText: { 
      type: String, 
      required: true, 
      minlength: 1, 
      maxlength: 280 },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
    username: [{ type: String, required: true }],
    reactions: [reactionsSchema],
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
