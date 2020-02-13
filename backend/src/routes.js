const express = require('express');

const routes = express.Router();

const MovieController = require('./controllers/MovieController');

routes.get('/movies',MovieController.index);
routes.post('/movies',MovieController.store);

module.exports = routes;
