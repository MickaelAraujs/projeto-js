const express = require('express');

const routes = express.Router();

const MovieController = require('./controllers/MovieController');

routes.get('/movies/:id',MovieController.show);
routes.get('/movies',MovieController.index);
routes.post('/movies',MovieController.store);

module.exports = routes;
