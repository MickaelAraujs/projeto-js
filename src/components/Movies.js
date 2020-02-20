import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Alert
} from 'reactstrap';

import Title from './Title';
import MoviesList from '../services/MoviesList';

import '../styles.css';

function Movies({ genre }) {
    const [ movies, setMovies ] = useState([]);
    const [ titleName, setTitleName ] = useState('Filmes Disponíveis');

    useEffect(() => {
        const moviesList = MoviesList;
        
        if (!genre) {
                setMovies(moviesList);
        } else {
            const filter = moviesList.filter(item => item.genre === genre);
            setMovies(filter);
            setTitleName(`Filmes de ${genre}`);
        }
        
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
            <Card key={movie._id} style={{display:'flex', flexDirection: 'row'}}>
                <CardImg top width="100%" className='imgCard' src={movie.poster_url} alt="movie poster" />
                <CardBody style={{marginTop:'30px'}}>
                    <CardTitle className='cardTitle'>{movie.title}</CardTitle>
                    <CardText>{movie.sinopse}</CardText>
                    <Button tag={Link} to={`movies/${movie._id}`} className='btn btn-dark'>Mais Informações</Button>
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