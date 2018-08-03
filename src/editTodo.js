import React from "react";
import { connect } from "react-redux";
import { editToDo } from "./actions";
import _ from "lodash";

class EditToDo extends React.Component {
  constructor({ match }) {
    super();
    this.id = match.params.id;
    this.state = { text: "" };
  }
  componentWillMount() {
    _.forEach(this.props.todos, (data, index) => {
      if (this.id == data.id) {
        this.setState({ text: data.text });
      }
    });
  }
  onEdit = e => {
    this.setState({ text: e.target.value });
  };
  onSubmit = () =>{
    this.props.editToDo({ text: this.state.text, id: this.id });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={e => this.onEdit(e)}
          style={{ border: "none" }}
        />
        {this.state.text ? (
          <button type="submit" onClick={this.onSubmit}>
            Submit
          </button>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  editToDo: payload => dispatch(editToDo(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditToDo);
