import React, { Component } from 'react';
import './App.css';

import Home from '../Home/Home';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  setUser = (userName) => {
    this.setState({user: userName});
    localStorage.setItem('user', userName);
    const arr = [];
    localStorage.setItem('tasks', arr);
  }

  logView = () => {
    const { user } = this.state;
    if(user) {
      return <Home user = {user} />;
    } else {
      return (
        <div>
          <h1>Enter your name</h1>        
          <Form
            setItem = {this.setUser}
            login />
        </div>
      );
    }
  }

  componentDidMount() {
    this.setState({user: localStorage.getItem('user')});
  }

  render() {
    return (
      <div>
        <div>Todo app</div>
        {this.logView()}
      </div>
    );
  }
}

export default App;
