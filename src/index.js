import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Main} from './controllers/Main';

ReactDOM.render(<App />, document.getElementById('root'));

window.main = new Main();



