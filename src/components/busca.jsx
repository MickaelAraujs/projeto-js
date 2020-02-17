import React, { useState, useEffect } from 'react';
import Title from './Title';
import api from '../services/api';
//PESQUISAR COMO USAR API E FILTRAR OS FILMES, E IMPRIMIR CORRETAMENTE
export default function  Filmes ({ genre }){
        const [ pesquisa, setPesquisa ] = useState([]);

        useEffect(()=> {
            async function BuscandoFilmes(){
            const response = await api.get('/movies');
            
            const filter = response.data.filter(busca => {
                    return busca.genre === genre;
            });

            setPesquisa(filter);
        };
        BuscandoFilmes();
        },[genre]);

    };
