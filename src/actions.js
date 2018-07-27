import { createActions } from "redux-actions";

export const { addTodo, toggleTodo, deleteTodo, editTodo } = createActions({
  ADD_TODO: (text, id) => ({ text, id }),
  TOGGLE_TODO: id => ({ id }),
  DELETE_TODO: id => ({ id }),
  EDIT_TODO: (text, id) => ({ text, id })
});
