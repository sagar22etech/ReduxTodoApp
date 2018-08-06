import { handleActions } from "redux-actions";
import { toggleTodo} from "./actions";
import {
  createToDoSuccess,
  createToDoError,
  requestListToDoSuccess,
  requestListToDoError,
  deleteToDoSuccess,
  deleteToDoError,
  editToDoSuccess,
  editToDoError,
  toggleToDoSuccess,
  toggleToDoError
} from "./actions";
import _ from 'lodash';
import update from "immutability-helper";

const defaultState = {
  todos: [],
  isAddTodoMounted:false,
  isTodoAdded: false,
  islistloading: false,
  isDelete: false,
  isEditSuccesful: false,
  isToggleSuccessful: false
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

const handleToggleToDoSuccess = (state, data) => {
  return update(state,{
    isToggleSuccessful: { $set: true}
  })
};

const handleToggleToDoError = (state, data) => {
  return update(state,{
    isToggleSuccessful: { $set: false}
  })
};

const handleEditToDoSuccess = (state, data) => {
  return update(state, {
    isEditSuccesful: { $set: true }
  });
};

const handleEditToDoError = (state, data) => {
  return update(state, {
    isEditSuccesful: { $set: false }
  });
};

const todos = handleActions(
  {
    [toggleToDoSuccess]: handleToggleToDoSuccess,
    [toggleToDoError]: handleToggleToDoError,
    [createToDoSuccess]: handleCreateTodoSuccess,
    [createToDoError]: handleCreateTodoError,
    [requestListToDoSuccess]: handleListToDoSuccess,
    [requestListToDoError]: handleListToDoError,
    [deleteToDoSuccess]: handleDeleteToDoSuccess,
    [deleteToDoError]: handleDeleteToDoError,
    [editToDoSuccess]: handleEditToDoSuccess,
    [editToDoError]: handleEditToDoError
  },
  defaultState
);

export default todos;
