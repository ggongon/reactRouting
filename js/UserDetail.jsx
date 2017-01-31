import React, { Component } from 'react';

export default class User extends Component {

	render() {
		const users = this.props.route.users;
		let user = users.filter(user => user.id == this.props.params.id);

		// console.log("user: ", user);
		return (
			<div>
				<h1>Individual user</h1>
				<p>name: {user[0].name}</p>
			</div>
		);
	}
}
