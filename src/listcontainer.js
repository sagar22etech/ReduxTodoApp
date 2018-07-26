import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo } from './actions'
import List from './list';

const mapStateToProps = state => {
    return ({
        todos: state.todos
    });
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (text, id) => dispatch(editTodo(text, id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
