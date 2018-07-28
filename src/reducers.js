import { handleActions } from "redux-actions";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "./actions";
import _ from "lodash";
import update from "immutability-helper";

const defaultState = { todos: [] };

const handleAddTodo = (state, { payload: { text, id } }) => {
  return update(state, {
    todos: { $push: [{ text: text, completed: false, id: id }] }
  });
};

const handleToggleTodo = (state, { payload: { id } }) => {
  let todo = _.clone(state.todos);
  const toggleId = _.findIndex(todo, function(o) {
    return o.id == id;
  });
  return update(state, {
    todos: {
      [toggleId]: {
        completed: {
          $apply: function(x) {
            return !x;
          }
        }
      }
    }
  });
};

const handleDeleteTodo = (state, { payload: { id } }) => {
  let todo = _.clone(state.todos);
  const delId = _.findIndex(todo, function(o) {
    return o.id == id;
  });
  return update(state, { todos: { $splice: [[delId, 1]] } });
};

const handleEditTodo = (state, { payload: { text, id } }) => {
  if (text === "") {
    return update(state, { todos: { $splice: [[id, 1]] } });
  } else {
    return update(state, { todos: { [id]: { text: { $set: text } } } });
  }
};

const todos = handleActions(
  {
    [addTodo]: handleAddTodo,
    [toggleTodo]: handleToggleTodo,
    [deleteTodo]: handleDeleteTodo,
    [editTodo]: handleEditTodo
  },
  defaultState
);

export default todos;
