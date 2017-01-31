import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import Users from './Users';
import UserDetail from './UserDetail';
import NoMatch from './NoMatch';
import Home from './Home';

const users = [
	{
		id: 1,
		name: 'Bob'
	},
	{
		id: 2,
		name: 'Nancy'
	}
];

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About}/>
			<Route path="users" component={Users} users={users} />
			<Route path="users/:id" component={UserDetail} users={users}/>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
	), 
	document.getElementById("root")
);

