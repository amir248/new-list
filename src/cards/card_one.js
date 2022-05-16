import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './cards_one.css';
// import OkImg from '../Impish-Indri.jpg';

import {
    Route,
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom"
  // import Home from './components/Home/Home'
  // import Appointments from './components/Appointments/Appointments'

class Card extends Component {

  render() {
     const { history } = this.props
    return (
    <React.Fragment>
    <h1>card</h1>

    </React.Fragment>
    );
  }
}

export default Card;
