export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export function addTodo(text, id) {
  return { type: ADD_TODO, text, id }
}
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}
export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}
export function editTodo(text, id) {
  return { type: EDIT_TODO, text, id }
}