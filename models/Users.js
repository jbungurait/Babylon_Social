const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, validate: [isEmail, 'invalid email'] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thoughts'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'Users'}],
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
        
const Users = model('Users', userSchema);

module.exports = Users;
