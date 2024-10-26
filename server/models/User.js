// MONGOOSE DATA MODEL FOR USERS
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Member"
    }],
    // TODO: Determine user preferences (not necessary at account creation)
    // NOTE: User preferences may be better stored as an object e.g. { prefID: <int ID>, userPref: <bool pref> }
    prefences: [{
        type: String,
        required: false
    }]
});

module.exports = mongoose.model('User', userSchema);