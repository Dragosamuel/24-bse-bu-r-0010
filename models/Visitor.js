const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    visitDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Visitor', visitorSchema); 