import React, { Component } from 'react';
import './App.css';
import List from './listcontainer';
import AddToDo from './addtodo';
class App extends Component {
  render() {
    return (<div className='container'>
      <h1 className='heading'>ToDo App</h1>
      <List />
      <AddToDo />
    </div>)
  }
}

export default App;
