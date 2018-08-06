import { createActions, createAction } from "redux-actions";
import constants from './constants'

export const createToDo = createAction(constants.CREATE_TO_DO)
export const createToDoSuccess = createAction(constants.CREATE_TO_DO_SUCCESS)
export const createToDoError = createAction(constants.CREATE_TO_DO_ERROR)
export const requestListToDo = createAction(constants.REQUEST_LIST_TO_DO)
export const requestListToDoSuccess = createAction(constants.REQUEST_LIST_TO_DO_SUCCESS)
export const requestListToDoError = createAction(constants.REQUEST_LIST_TO_DO_ERROR)
export const deleteToDo = createAction(constants.DELETE_TO_DO)
export const deleteToDoSuccess = createAction(constants.DELETE_TO_DO_SUCCESS)
export const deleteToDoError = createAction(constants.DELETE_TO_DO_ERROR)
export const editToDo= createAction(constants.EDIT_TO_DO)
export const editToDoSuccess= createAction(constants.EDIT_TO_DO_SUCCESS)
export const editToDoError= createAction(constants.EDIT_TO_DO_ERROR)
export const toggleToDo= createAction(constants.TOGGLE_TO_DO)
export const toggleToDoSuccess= createAction(constants.TOGGLE_TO_DO_SUCCESS)
export const toggleToDoError= createAction(constants.TOGGLE_TO_DO_ERROR)