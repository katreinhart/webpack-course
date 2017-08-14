import React, { Component } from 'react';
import api from 'api/users';

import './style.css';

export default class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const users = api.getUsers();
    this.setState({
      users
    });
  }

  render() {
    const users = this.state.users.map((user, index) => {
      const { name, age } = user;
      return <p key={ index }><span className='badge'>{ index }</span>  - { name } is { age }</p>;
    });

    return(
      <div className="usersContainer">
        <h2 className="usersTitle"><i className="fa fa-user" aria-hidden="true"></i> Users</h2>
        { users }
      </div>
    );
  }
};
