import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  propTypes: {
    name: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div>
			<nav>
				<Link to="/">Home</Link> |
				<Link to="/users">Users</Link> | 
				<Link to="/about">About</Link>
			</nav>
	    	<div className="routerView">
	      		{this.props.children}
			</div>
		</div>    	
    );
  }
}

