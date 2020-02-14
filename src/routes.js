import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Movies from './components/Movies';
import Info from './components/Info';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Movies} />
                <Route exact path='/movies/acao' render={props => <Movies genre='Ação' />} />
                <Route exact path='/movies/comedia' render={props => <Movies genre='Comédia' />} />
                <Route exact path='/movies/info/:id' render={props => <Info id={props.match.params.id} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;