import { createActions, createAction } from "redux-actions";
import constants from './constants'

export const { toggleTodo, editTodo } = createActions({
  TOGGLE_TODO: id => ({ id }),
  EDIT_TODO: (text, id) => ({ text, id })
});

export const createToDo = createAction(constants.CREATE_TO_DO)
export const createToDoSuccess = createAction(constants.CREATE_TO_DO_SUCCESS)
export const createToDoError = createAction(constants.CREATE_TO_DO_ERROR)
export const listToDo = createAction(constants.LIST_TO_DO)
export const listToDoSuccess = createAction(constants.LIST_TO_DO_SUCCESS)
export const listToDoError = createAction(constants.LIST_TO_DO_ERROR)
export const deleteToDo = createAction(constants.DELETE_TO_DO)
export const deleteToDoSuccess = createAction(constants.DELETE_TO_DO_SUCCESS)
export const deleteToDoError = createAction(constants.DELETE_TO_DO_ERROR)