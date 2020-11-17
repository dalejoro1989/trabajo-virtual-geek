const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    numeroTarjeta: {type: Int16Array, required: true},
    FechaVencimiento: {type: Int16Array, required: true},
    cvv: {type: Int16Array, required: true},
});

module.exports = mongoose.model('users', userSchema);