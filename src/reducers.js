import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from './actions'
import _ from 'lodash';
const initialState = {
  todos: []
}
function todos(state = initialState, action) {
  let todo = _.clone(state.todos);

  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...todo,
          {
            text: action.text,
            completed: false,
            id: action.id
          }
        ]
      }
    case TOGGLE_TODO:
      return {
        todos: _.map(state.todos, (todo, index) => {
          if (todo.id.toString() === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      }

    case DELETE_TODO:
      const delId = _.findIndex(todo, function (o) { return o.id == action.id })
      _.pullAt(todo, delId)
      return { todos: todo }

    case EDIT_TODO:
      if (action.text === "") {
        _.pullAt(todo, action.id)
        return { todos: todo }
      }
      else {
        todo[action.id].text = action.text;
        return {
          todos: todo
        }
      }


    default:
      return state
  }
}
export default todos