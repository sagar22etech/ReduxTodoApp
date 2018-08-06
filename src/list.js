import React from "react";
import { Link } from "react-router-dom";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.isTrue = this.props.location.pathname === "/listtodo";
  }
  componentDidMount(props) {
    this.props.requestListToDo();
  }
  onChange = (data) => {
    this.props.toggleToDo(data);
  };
  onClick(e) {
    this.props.deleteTodo(e.target.id);
  }

  render() {
    if (this.props.isDelete||this.props.isToggleSuccessful) {
      this.props.requestListToDo();
    }
    if (this.props.todos == null) {
      return <p>Nothing To Show</p>;
    }
    return (
      <ul className="list-group">
        {this.props.todos.map((data, i) => (
          <li key={i} className="list-group-item">
            <input
              checked={data.completed}
              type="checkbox"
              style={{ verticalAlign: "sub" }}
              onChange={()=>this.onChange({id:data.id,text:data.text,completed:!data.completed})}
              id={data.id}
            />
               <Link to={`/edittodo/${data.id}`} id={data.id}>
                <span>{data.text}</span>
              </Link>
            {data.completed ? (
              <div className="badges">
                <span className="badge badge-success">Complete</span>&nbsp;&nbsp;<span
                  className="badge badge-success"
                  id={data.id}
                  onClick={e => this.onClick(e)}
                >
                  Delete
                </span>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
}
