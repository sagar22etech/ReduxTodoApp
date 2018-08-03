import { handleActions } from "redux-actions";
import { toggleTodo, editTodo } from "./actions";
import {
  createToDoSuccess,
  createToDoError,
  requestListToDoSuccess,
  requestListToDoError,
  deleteToDoSuccess,
  deleteToDoError
} from "./actions";
import _ from 'lodash';
import update from "immutability-helper";

const defaultState = {
  todos: [],
  isAddTodoMounted:false,
  isTodoAdded: false,
  islistloading: false,
  isDelete: false
};

const handleCreateTodoSuccess = (state, data) => {
  return update(state, {
    isAddTodoMounted: { $set: true },
    isTodoAdded: { $set: true },
    islistloading: { $set: false },
    isDelete: { $set: false }
  });
};

const handleCreateTodoError = (state, data) => {
  return update(state, {
    
    isTodoAdded: { $set: false },
    islistloading: { $set: false },
    isDelete: { $set: false }
  });
};

const handleListToDoSuccess = (state, data) => {
  return update(state, {
    todos: { $set: data.payload },
    islistloading: { $set: true },
    isDelete: { $set: false }
  });
};

const handleListToDoError = (state, data) => {
  return update(state, {
    islistloading: { $set: false },
    isDelete: { $set: false }
  });
};

const handleDeleteToDoSuccess = (state, data) => {
  return update(state, {
    islistloading: { $set: false },
    isDelete: { $set: true }
  });
};

const handleDeleteToDoError = (state, data) => {
  return update(state, {
    islistloading: { $set: false },
    isDelete: { $set: false }
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


const todos = handleActions(
  {
    [toggleTodo]: handleToggleTodo,
    [createToDoSuccess]: handleCreateTodoSuccess,
    [createToDoError]: handleCreateTodoError,
    [requestListToDoSuccess]: handleListToDoSuccess,
    [requestListToDoError]: handleListToDoError,
    [deleteToDoSuccess]: handleDeleteToDoSuccess,
    [deleteToDoError]: handleDeleteToDoError
  },
  defaultState
);

export default todos;
