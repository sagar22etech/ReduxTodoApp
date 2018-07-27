import { handleActions } from "redux-actions";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "./actions";
import _ from "lodash";

const defaultState = { todos: [] };

const handleAddTodo = (state, { payload: { text, id } }) => {
  return {
    todos: [
      ...state.todos,
      {
        text: text,
        completed: false,
        id: id
      }
    ]
  };
};
const handleToggleTodo = (state, { payload: { id } }) => {
  return {
    todos: _.map(state.todos, todo => {
      if (todo.id.toString() === id) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    })
  };
};
const handleDeleteTodo = (state, { payload: { id } }) => {
  let todo = _.clone(state.todos);
  const delId = _.findIndex(todo, function(o) {
    return o.id == id;
  });
  _.pullAt(todo, delId);
  return { todos: todo };
};
const handleEditTodo = (state, { payload: { text, id } }) => {
  let todo = _.clone(state.todos);
  if (text === "") {
    _.pullAt(todo, id);
    return { todos: todo };
  } else {
    todo[id].text = text;
    return {
      todos: todo
    };
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
