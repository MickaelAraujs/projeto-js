import React, { Component, useState, useEffect, Fragment } from 'react';
import Busca from './busca';
import lupa from './lupa.jpg'


export default class Buscando extends Component{
    
        state = {
        procuraFilme:"Procurar "
    };

    setProcuraFilme(e) {
        this.setState({procuraFilme:e.target.value})
    }
    render(){
    return(
        <Fragment>
        <input type="text" placeholder="Buscar..."
        value={this.ProcuraFilme} onchange={e=>this.setProcuraFilme(e)}/>  
         <img src={lupa} alt="Lupa" width="40px" onClick={e=>Busca(e.value)}/>
        </Fragment>
    )};
};