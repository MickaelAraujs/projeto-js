const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

module.exports = {
    async store(req,res) {
        const movie = await Movie.create(req.body);

        return res.json(movie);
    },
    async index(req,res) {
        const movie = await Movie.find(req.query);

        return res.json(movie)
    }
}