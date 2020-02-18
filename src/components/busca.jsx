import React, { useState, useEffect } from 'react';
import Title from './Title';
import api from '../services/api';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Alert
} from 'reactstrap';
import '../styles.css';

//PESQUISAR COMO USAR API E FILTRAR OS FILMES, E IMPRIMIR CORRETAMENTE
export default function  Filmes ({ e }){
        const [ pesquisa, setPesquisa ] = useState([]);
        const [NomeFilme, SetNomeFilme] = useState([]);
        useEffect(()=> {
            async function BuscandoFilmes(){
            const response = await api.get('/movies');
            
            const filter = response.data.filter(busca => {
                    return busca.e === e;
            });

            setPesquisa(filter);
        };
        BuscandoFilmes();
        },[e]);
        
        if (pesquisa.length === 0) {
            return(
                <div className='container'>
                    <Alert className='alert' color="warning">
                        Nenhum filme encontrado.
                    </Alert>
                </div>
            );
        }

        const resultadoPesquisa = pesquisa => {
            return(
                <Card key={pesquisa._id} className='card'>
                    <CardImg top width="100%" className='imgCard' src={pesquisa.poster_url} alt="movie poster" />
                    <CardBody>
                        <CardTitle className='cardTitle'>{pesquisa.title}</CardTitle>
                        <CardText>{pesquisa.sinopse}</CardText>
                        <Button tag={Link} to={`movies/info/${pesquisa._id}`} className='btn btn-danger'>Mais Informações</Button>
                    </CardBody>
                </Card>
            );
        }
        return(
            <div className='container moviesContainer'>
                <Title title={e} />
                {
                    pesquisa.map(pesquisa => resultadoPesquisa(pesquisa))
                }
            </div>
            )
    };