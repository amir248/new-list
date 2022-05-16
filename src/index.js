import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Section from './section';

// import { Router } from "react-router-dom"
// import {createBrowserHistory} from 'history'

// import Card from './cards/card_one';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(<Section />,document.querySelector('section'));

// создаём кастомную историю
//   const history = createBrowserHistory()
// ReactDOM.render((
//   <Router history={history}>
//     <Card />
//   </Router>
// ),document.querySelector('router'));
