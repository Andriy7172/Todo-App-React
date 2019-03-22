import React, { Component } from 'react';
import './TaskItem.css';

import Form from '../Form/Form';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task.task,
      done: props.task.done,
      id: props.id,
      editing: false,
    }
  }

  handleDone = (event) => {
    event.preventDefault();
    this.props.onDone();
    this.setState({done: !this.state.done});
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[this.state.id].done = !this.state.done;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  editTask = (edited) => {
    this.setState({
      task: edited,
      editing: !this.state.editing
    });
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[this.state.id].task = edited;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleEdit = (event) => {
    this.setState({editing: !this.state.editing});
  }
  
  render() {
    const { done } = this.state;
    let classNames = '';

    if(done) {
      classNames += ' done';
    }

    return (
      <div>
        {this.state.editing ? <Form taskItem = {this.state.task} setItem = {this.editTask} login /> : <div>
          <p className = {classNames} >
            {this.state.task}
          </p>
          <input 
            type = 'button' 
            value = 'done'
            onClick = {this.handleDone} />
          <input 
            type = 'button' 
            value = 'edit'
            onClick = {this.handleEdit} />
          <input 
            type = 'button' 
            value = 'delete'
            onClick = {this.props.onDelete} />
        </div>}
      </div>
    );
  }
}