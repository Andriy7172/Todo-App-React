import React, { Component } from 'react';
import './Home.sass';

import ToDo from '../ToDo/ToDo';

export default class Home extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className = 'home'>
        <h1>Hello {user}</h1>
        <ToDo />
      </div>
    );
  }
}