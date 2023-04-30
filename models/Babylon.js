const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, validate: [validateEmail, true] },
    thoughts: { _id: [Thoughts]},
    friends: { _id: [User] },
});


const thoughtsSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, validate: [length, 1-280]},
    createdAt: { type: Date, get: (date) => {
        if (date) return date.toISOString().split("T") [0];}},
        username: { type: String, required: true, refrences: [User]},
        reactions: [Reactions]
    });
    
    const reactionsSchema = new mongoose.Schema({
        reactionId: {  },
        reactionBody: { type: String, required: true, validate: [length, 280]},
        username: { type: String, required: true},
        createdAt: { type: Date, get: (date) => {
            if (date) return date.toISOString().split("T") [0];}}
        })
        
        const friendsSchema = new mongoose.Schema({
            
        });
        
        
const User = mongoose.model('User', userSchema);

const Thoughts = mongoose.model('Thoughts', thoughtsSchema);

const Reactions = mongoose.model('Reactions', reactionsSchema);

