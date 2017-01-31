import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Users extends Component {
	render() {
		const users = this.props.route.users;
		const links = users.map(user => <li><Link to={'/users/'+user.id} key={user.id} className="block">{user.name}</Link></li>)

		return (
			<div>
				<h1>All users</h1>
				<ul>
					{links}
				</ul>
			</div>
		);
	}
}
