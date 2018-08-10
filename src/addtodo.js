import React from "react";
import { connect } from "react-redux";
import { createToDo } from "./actions";
class AddToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "text",
      todoid: 1,
      value: ""
    };
  }
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() !== "") {
      this.props.createToDo({
        text: this.state.value,
        id: this.state.todoid++
      });
      this.setState({ id: "text", value: "" });
    } else {
      this.setState({ id: "error" });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} id="form">
        <div className="form-group">
          <label htmlFor="todo">ToDo</label>
          <input
            type="text"
            id={this.state.id}
            className="form-control"
            onChange={this.onChange}
            placeholder="Enter Todo"
            value={this.state.value}
          />
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
        {this.props.isTodoAdded && this.props.isAddTodoMounted ? (
          <span>Todo Added Successfully</span>
        ) : null}
      </form>
    );
  }
}
const mapStateToProps = state => ({
  isTodoAdded: state.isTodoAdded,
  isAddTodoMounted: state.isAddTodoMounted
});
const mapDispatchToProps = dispatch => ({
  createToDo: payload => dispatch(createToDo(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo);
