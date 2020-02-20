import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge
} from 'reactstrap';

import MoviesList from '../services/MoviesList';
import '../styles.css';

function Info({ id }) {

    return (
        <div className='container-fluid'>
            <Card style={{display: 'flex', flexDirection: 'row'}}>
                <CardImg className='imgCard' style={{maxHeight: '380px', alignSelf: 'center'}} width="100%" src={MoviesList[id].poster_url} alt="Movie Poster" />
                <CardBody style={{marginLeft: '25px'}}>
                    <CardTitle className='cardTitle'>{MoviesList[id].title}</CardTitle>
                    <CardSubtitle>
                        <h5>Gênero: <Badge color='warning'>{MoviesList[id].genre}</Badge></h5>
                    </CardSubtitle>
                    <CardText>{MoviesList[id].sinopse}</CardText>
                    <iframe style={{marginLeft: '120px'}} width="560" height="315" src={MoviesList[id].trailer_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </CardBody>
            </Card>
        </div>
    );
}

export default Info;