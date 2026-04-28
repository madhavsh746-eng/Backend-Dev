const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        uppercase: true, 
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
}, { timestamps: true });

module.exports = mongoose.model("Stock", stockSchema);