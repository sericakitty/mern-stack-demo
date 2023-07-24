const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    text: {
        type: String,
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
