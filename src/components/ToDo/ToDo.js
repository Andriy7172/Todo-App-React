import React, { Component } from 'react';
import './ToDo.css';

import Form from '../Form/Form';
import Repeater from '../Repeater/Repeater';
import TaskItem from '../TaskItem/TaskItem';
import Status from '../Status/Status';

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
    this.id = 100;
  }

  setTask = (newTask) => {
    const task = {
      task: newTask,
      done: false,
      id: `${Date.now()}`,
    }

    this.setState(({tasks}) => {
      const newTasks = [
        ...tasks, task
      ];

      localStorage.setItem('tasks', JSON.stringify(newTasks));

      return {
        tasks: newTasks,
      }
    });
  }

  componentWillMount() {
    let tasks = localStorage.getItem('tasks');
    if(tasks) {
      tasks = JSON.parse(tasks);
      this.setState({tasks: tasks});
    } else {
      this.setState({tasks: []});
    }
  }

  setDeleted = (deleted) => {
    this.setState(({tasks}) => {
      const idx = tasks.findIndex((element) => deleted === element.id);

      const result = [ 
        ...tasks.slice(0, idx), 
        ...tasks.slice(idx + 1)
      ];

      localStorage.setItem('tasks', JSON.stringify(result));
      return {
        tasks: result,
      }
    });
  }

  doneToggle = (id) => {
    console.log(`toggle ${id}`);
    this.setState(({tasks}) => {
      const idx = tasks.findIndex((el) => id === el.id);

      const oldItem = tasks[idx];
      const newItem = { ...oldItem, done: !oldItem.done }

      const result = [
        ...tasks.slice(0, idx),
        newItem,
        ...tasks.slice(idx + 1)
      ];

      return {
        tasks: result,
      }
    });
  }

  render() {
    const { tasks } = this.state;
    const doneCount = tasks.filter((el) => el.done).length;
    const activeCount = tasks.length - doneCount;

    return(
      <div>
        <h2>List Of Task</h2>
        <Status
          active = {activeCount}
          done = {doneCount} />
        <Repeater 
          items = {this.state.tasks}
          Item = {TaskItem}
          onDelete = {this.setDeleted}
          onDone = {this.doneToggle} />
        <Form setItem = {this.setTask} />
      </div>
    );
  }
}