const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userShema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    county: {
        type: String,
        default: null
    },
    zipcode: {
        type: String,
        default: null
    },
    pincode: {
        type: String,
        default: null
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    updatedAt: {
        type: String,
        default: Date.now()
    },
    status: {
        type: Number,
        default: 1
    }
})

const User = mongoose.model('users', userShema)

module.exports = { User }