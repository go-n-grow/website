import React, { Component } from "react";
import Nav from "reusable-components/ui/nav";

// import NavItems from "./nav-items.json";


export default class Nav extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	render () {
		return (
			<Nav NavItems={  }>

			</Nav>
		);
	}
}
