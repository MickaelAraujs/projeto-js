const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster_url: {
        type: String,
        required: true
    },
    trailer_url: {
        type: String,
        required: true
    },
    sinopse: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Movie',MovieSchema);