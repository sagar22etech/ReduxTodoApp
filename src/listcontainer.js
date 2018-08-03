import { connect } from "react-redux";
import { toggleTodo, deleteToDo, editTodo, requestListToDo } from "./actions";
import List from "./list";

const mapStateToProps = state => {
  return {
    todos: state.todos,
    isTodoAdded: state.isTodoAdded,
    islistloading: state.islistloading,
    isDelete: state.isDelete
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteToDo(id)),
  editTodo: (text, id) => dispatch(editTodo(text, id)),
  requestListToDo: () => dispatch(requestListToDo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
