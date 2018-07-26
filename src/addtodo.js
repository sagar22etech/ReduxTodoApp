import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from './actions'
class AddToDo extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch=dispatch
    this.value = '';
    this.id=0;
    this.state = {
      id: 'text',
    }
  }
  onChange = (event) => {
    this.value = event.target.value;
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (this.value.trim() !== '') {
      this.dispatch(addTodo(this.value,this.id++));
      this.setState({ id: 'text' });
    }
    else {
      this.setState({ id: 'error' })
    }
  }
  render() {
    return (<form onSubmit={this.onSubmit} id="form">
      <div className="form-group">
        <label htmlFor="todo">ToDo</label>
        <input type="text" id={this.state.id} className="form-control" onChange={this.onChange} placeholder="Enter Todo" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>);
  }
}
export default connect() (AddToDo)