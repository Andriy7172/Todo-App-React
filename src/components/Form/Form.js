import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    }
  }
  
  handleChange = (event) => {
    this.setState({item: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let { item } = this.state;
    if(!item) {
      item = event.target.item.value;
    }
    this.props.setItem(item);
    this.setState({item: ''});
  }

  componentDidMount() {
    if (this.props.edit) {
      this.setState({item: this.props.taskItem});
    }
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type = 'text' name = 'item' onChange = {this.handleChange} value = {this.state.item} required />
        <button>{this.props.login || this.props.edit ? 'submit' : 'add'}</button>
      </form>
    );
  }
}

export default Form;