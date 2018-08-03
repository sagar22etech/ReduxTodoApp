import Axios from "axios";
import { all, takeLatest, put, call } from "redux-saga/effects";
import constants from "./constants";
import * as actions from "./actions";

function data(URL, method, data) {
  const url = `http://localhost:3000/` + URL;
  if (method === "GET") {
    return Axios.get(url, data);
  }
  if (method === "DELETE") {
    return Axios.delete(url, data);
  } else {
    return Axios.post(url, data);
  }
}

export function* createToDo(action) {
  const response = yield call(data, "todos", "POST", {
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  });
  if (response.status === 201) {
    yield put(actions.createToDoSuccess());
  } else {
    yield put(actions.createToDoError());
  }
}

export function* requestListToDo() {
  const response = yield call(data, "todos", "GET", null);
  if (response) {
    yield put(actions.listToDoSuccess(response.data));
  } else {
    yield put(actions.listToDoError());
  }
}

export function* deleteToDo(action) {
  const response = yield call(data, "todos/" + action.payload, "DELETE", null);
  if (response.status === 200) {
    yield put(actions.deleteToDoSuccess());
  } else {
    yield put(actions.deleteToDoError());
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
