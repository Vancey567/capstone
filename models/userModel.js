const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    dob: {type: Date, required: true},
    address: {type: String, required: true},
    password: {type: String, required: true}
}, {timestamps: true})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;