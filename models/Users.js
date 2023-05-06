const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, validate: [validateEmail, true] },
    thoughts: { _id: [Thoughts]},
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'friends' }],
},
{
    toJSON: {
        virtuals: true,
    }, 
    id: false,
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});     
        
const Users = model('User', userSchema);

module.exports = Users;

