import React, { useState, useEffect } from 'react';
import api from '../services/api';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge
} from 'reactstrap';

import '../styles.css';

function Info({ id }) {
    const [ movieInfo, setMovieInfo ] = useState({});

    useEffect(() => {
        async function loadMovieInfo() {
            const response = await api.get(`/movies/${id}`);

            setMovieInfo(response.data);
        }

        loadMovieInfo();
    },[id]);

    return (
        <div className='container-fluid'>
            <Card>
                <CardBody>
                    <CardTitle className='cardTitle'>{movieInfo.title}</CardTitle>
                    <CardSubtitle>
                        <h5>Gênero: <Badge color='warning'>{movieInfo.genre}</Badge></h5>
                    </CardSubtitle>
                </CardBody>
                <CardImg className='imgCard' width="100%" src={movieInfo.poster_url} alt="Movie Poster" />
                <CardBody>
                    <CardText>{movieInfo.sinopse}</CardText>
                    <a href={movieInfo.trailer_url}>Assistir Trailer</a>
                </CardBody>
            </Card>
        </div>
    );
}

export default Info;