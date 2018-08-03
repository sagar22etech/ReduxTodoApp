import { connect } from "react-redux";
import { toggleTodo, deleteToDo, editToDo, requestListToDo } from "./actions";
import List from "./list";

const mapStateToProps = state => {
  return {
    todos: state.todos,
    isTodoAdded: state.isTodoAdded,
    islistloading: state.islistloading,
    isDelete: state.isDelete,
    isEditSuccesful: state.isEditSuccesful
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteToDo(id)),
  editToDo: (payload) => dispatch(editToDo(payload)),
  requestListToDo: () => dispatch(requestListToDo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
