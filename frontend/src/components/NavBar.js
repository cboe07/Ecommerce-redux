import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Slick from './Slick';
import $ from 'jquery';

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
	}

	componentDidMount() {
		// go get all productlines from the double
		$.getJSON(window.hostAddress+'/productlines/get', (productlinesData)=>{
			console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			})
		})
	}

  render(){
  	const shopMenu = [];
  	// Map through this.state.productlines. First render, will not loop because array is empty
  	this.state.productlines.map((pl,index)=>{
  		console.log(pl)
  		shopMenu.push(
  			<Link key={index} to={`/shop/${pl.link}`}>{pl.productLine}</Link>
  		)
  	})


    return(
    	<div>
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid navbar-white">
			    <ul className="nav navbar-nav">
			    	<li><Link className="link" to="/">Home</Link></li>
			      	<li className="dropdown">
			      		<Link className="link" to="/shop"><i className="arrow down" /> Shop</Link>
			      		<ul>
				      		<li className="dropdown-links">
				      			{shopMenu}
				      		</li>
			      		</ul>
			      	</li>
			      	<li><Link className="link" to="/about">About Us</Link></li>
			      	<li><Link className="link" to="/contact">Contact Us</Link></li>
			    </ul>
			  </div>
			  <div className="container">
			    <div className="navbar-header">
			    	<Link className="link" to="/" className="navbar-brand">ClassicModels</Link>
			    </div>
				   <ul className="nav navbar-nav float-right">
				      <li className="text-right link"><Link to="/login">Login</Link></li>
				      <li className="text-right link"><Link to="/register">Register</Link></li>
				      <li className="text-right link"><Link to="/cart">(0) items in your cart | ($0.00)</Link></li>
				   </ul>
			  </div>
			</nav>
	        <Route exact path="/" component={Slick} />
        </div>
	)
  }
}

export default NavBar