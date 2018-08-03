import callAjax from "./services/ajaxcall";
import { all, takeLatest, put, call } from "redux-saga/effects";
import constants from "./constants";
import * as actions from "./actions";

export function* createToDo(action) {
  try {
    const response = yield call(callAjax, "todos", "POST", {
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    });
    if (response.status === 201) {
      yield put(actions.createToDoSuccess());
    }
  } catch (error) {
    yield put(actions.createToDoError());
    console.log(error);
  }
}

export function* requestListToDo() {
  try {
    const response = yield call(callAjax, "todos", "GET", null);
    if (response) {
      yield put(actions.requestListToDoSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.requestListToDoError());
    console.log(error);
  }
}

export function* deleteToDo(action) {
  try {
    const response = yield call(
      callAjax,
      "todos/" + action.payload,
      "DELETE",
      null
    );
    if (response.status === 200) {
      yield put(actions.deleteToDoSuccess());
    }
  } catch (error) {
    yield put(actions.deleteToDoError());
    console.log(error);
  }
}

export function* watchaddData() {
  yield takeLatest(constants.CREATE_TO_DO, createToDo);
  yield takeLatest(constants.REQUEST_LIST_TO_DO, requestListToDo);
  yield takeLatest(constants.DELETE_TO_DO, deleteToDo);
}

export default function* rootSaga() {
  yield all([watchaddData()]);
}