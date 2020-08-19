const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    phone: String,
    avatar: String,
    account: String,
    password: String
})
let User = mongoose.model('User', userSchema, 'users')
module.exports = User;