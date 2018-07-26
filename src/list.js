import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange = (e) => {
        this.props.toggleTodo(e.target.id);
    }
    onEdit = (e) => {
        this.props.editTodo(e.target.value, e.target.id);
    }
    onClick(e) {
        this.props.deleteTodo(e.target.id);
    }

    render() {

        if (this.props.todos == null) {
            return <p>Nothing To Show</p>
        }
        return (<ul className="list-group">
            {this.props.todos.map((data, i) =>
                <li key={i} className="list-group-item">
                    <input checked={data.completed}
                        type='checkbox'
                        style={{ 'verticalAlign': 'sub' }} onChange={this.onChange}
                        id={data.id}
                    />
                    <input type='text' id={i} value={data.text} onChange={(e) => this.onEdit(e)} style={{ "border": "none" }} />
                    {data.completed ?
                        <div className="badges"><span className='badge badge-success'>Complete</span>&nbsp;&nbsp;<span className='badge badge-success' id={data.id} onClick={(e) => this.onClick(e)}>Delete</span></div> :
                        null}
                </li>
            )}
        </ul>);
    }
}