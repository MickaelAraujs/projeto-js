import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Alert
} from 'reactstrap';

import api from '../services/api';
import Title from './Title';

import '../styles.css';


function Movies({ genre }) {
    const [ movies, setMovies ] = useState([]);
    const [ titleName, setTitleName ] = useState('Filmes Disponíveis');

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/movies');

            if (!genre) {
                setMovies(response.data);
            } else {
                const filter = response.data.filter(item => {
                    return item.genre === genre;
                });

                setMovies(filter);
                setTitleName(`Filmes de ${genre}`);
            }
        }

        loadMovies();
    },[genre]);

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
                    <Button tag={Link} to={`movies/info/${movie._id}`} className='btn btn-danger'>Mais Informações</Button>
                </CardBody>
            </Card>
        );
    }

    return(
        <div className='container moviesContainer'>
            <Title title={titleName} />
            {
                movies.map(movie => renderAllMovies(movie))
            }
        </div>
    );
}

export default Movies;