import React, { Component } from 'react';

class Nav extends Component{
	render(){
		
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div >
					<div>
						<a className="navbar-brand">Classic Models</a>
					</div>
					<div>
						<ul className="nav navbar-nav navbar-right">
							<li><a>Page 1</a></li>
							<li><a>Page 2</a></li>
							<li><a>Page 3</a></li>
							<li><a>Page 4</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}

}


export default Nav;

