import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className="container-fluid">
                        <ul className='navbar-nav'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/addtodo">AddTodo</Link>
                            </li>
                            <li>
                                <Link to="/listtodo">List Todo</Link>
                            </li>
                            <li>
                                <Link to="/edittodo">Edit Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="contents">
                    {this.props.children}
                </div>
            </div>
        );
    }
}