import React, { Component } from 'react';

class Nav extends Component{
	render(){
		
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>
			      <a className="navbar-brand" href="#">Classic Models</a>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			      	<li><a href="#">Home</a></li>
			        <li className="active"><a href="#">About Us</a></li>
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop <span class="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Action</a></li>
			            <li><a href="#">Another action</a></li>
			            <li><a href="#">Something else here</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#">Separated link</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#">One more separated link</a></li>
			          </ul>
			        </li>
			      </ul>
			      <form className="navbar-form navbar-right">
			        <div className="form-group">
			          <input type="text" className="form-control" placeholder="Search"/>
			        </div>
			        <button type="submit" className="btn btn-default">Submit</button>
			      </form>
			    </div>
			  </div>
			</nav>
		)
	}

}


export default Nav;

