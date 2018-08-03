import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import List from './listcontainer';
import EditTodo from './editTodo';
import AddToDo from './addtodo';
import Home from './home';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {

  render() {
    return (<div className='container'>
      <Router>
      <NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/addtodo" component={AddToDo} />
        <Route path="/listtodo" component={List} />
        <Route exact path="/edittodo" component={EditTodo} />
        <Route exact path="/edittodo/:id" component={EditTodo} />
      </NavBar>
    </Router>
    </div>)
  }
}

export default App;
