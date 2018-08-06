import { connect } from "react-redux";
import { toggleToDo, deleteToDo, editToDo, requestListToDo } from "./actions";
import List from "./list";

const mapStateToProps = state => {
  return {
    todos: state.todos,
    isTodoAdded: state.isTodoAdded,
    islistloading: state.islistloading,
    isDelete: state.isDelete,
    isEditSuccesful: state.isEditSuccesful,
    isToggleSuccessful: state.isToggleSuccessful
  };
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteToDo(id)),
  editToDo: (payload) => dispatch(editToDo(payload)),
  requestListToDo: () => dispatch(requestListToDo()),
  toggleToDo : (payload) => dispatch(toggleToDo(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
