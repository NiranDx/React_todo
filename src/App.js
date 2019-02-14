import React, { Component } from 'react';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import './App.css';

class App extends Component {
  state = {
    tasks: [{ id: 1, task: 'Do homework' ,address: 'Phusket' ,date:'2019-2-14'},
    { id: 2, task: 'Read book',address: 'BKK' ,date:'2019-2-15'}],
    id: 3
  }

  addTask = (task,address,date) => {
    this.setState({
      tasks: [...this.state.tasks, { id: this.state.id, task,address,date}],
      id: this.state.id + 1
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <TaskList tasks={this.state.tasks} />
        <InputTask addTask={this.addTask} id={this.state.id} />
        <br />
      </div>
    );
  }
}

export default App;
