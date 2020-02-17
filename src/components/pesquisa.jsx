import React, { Component, useState, useEffect, Fragment } from 'react';
import chama from './busca';
import { render } from '@testing-library/react';

import Title from './Title';
export default class Buscando extends Component{
    
    

    state = {
        busca:"Procurar "
    };

    setBusca(e){
        this.setState({busca:e.target.value})
    }
    render(){
    return(
        <Fragment>
        <input type="text" placeholder="Buscar...."
        value={this.busca} onchange={e=>this.setBusca(e)}/>
        </Fragment>
    )};
};