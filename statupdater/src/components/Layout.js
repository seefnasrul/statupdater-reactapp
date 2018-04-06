import React from 'react';
import Nav from './Nav.js';
import Timeline from './pages/Timeline.js';

class Layout extends React.Component {
	render(){


		return(
			<div>
			<Nav />
			<div className="container">
				<Timeline />
			</div>
			</div>
			)
	}
}
export default Layout;
