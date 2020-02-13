import React, { useState, useEffect } from 'react';
import api from '../services/api';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Alert
} from 'reactstrap';

import '../styles.css';

function Movies() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/movies');

            setMovies(response.data);
        }

        loadMovies();
    },[]);

    if (movies.length === 0) {
        return(
            <div className='container'>
                <Alert className='alert' color="warning">
                    Não existem filmes disponíveis.
                </Alert>
            </div>
        );
    }

    const renderAllMovies = movie => {
        return(
            <Card key={movie._id} className='card'>
                <CardImg top width="100%" className='imgCard' src={movie.poster_url} alt="movie poster" />
                <CardBody>
                    <CardTitle className='cardTitle'>{movie.title}</CardTitle>
                    <CardText>{movie.sinopse}</CardText>
                    <Button className='btn btn-danger'>Mais Informações</Button>
                </CardBody>
            </Card>
        );
    }

    return(
        <div className='container moviesContainer'>
            <h1>Filmes Disponíveis</h1>
            {
                movies.map(movie => renderAllMovies(movie))
            }
        </div>
    );
}

export default Movies;