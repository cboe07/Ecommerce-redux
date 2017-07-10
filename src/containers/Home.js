import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';


class Home extends Component{
	render(){
		
		return(
			<div>
				<Nav />
				<h1>Home</h1>
			</div>
		)
	}

}


export default Home;