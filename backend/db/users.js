const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },

});

const User = mongoose.model('User' ,UserSchema);

module.exports = User;