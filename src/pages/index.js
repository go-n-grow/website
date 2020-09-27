import React from "react";
import { connect } from "react-redux";

import Header from "../components/home/header/index.jsx";
import Explanation from "../components/home/explanation/index.jsx";
import Map from "../components/home/map/index.jsx";
import RegisterInterferer from "../components/home/register-interferer";
import Footer from "../components/layout/footer";
import Nav from "../components/ui/organism/nav";
import RegisterOverlay from "../components/ui/organism/overlay/register";


const App = ({ overlayActive, setOverlayActive }) => {
	return (
		<>
			<Nav/>

			<Header/>
			<Explanation/>
			<RegisterInterferer/>
			<Map/>

			<Footer/>

			<RegisterOverlay
				isActive={ overlayActive }
				onClose={ () => setOverlayActive({
					overlayActive: false
				}) }
			/>

		</>
	);
};

const mapStateToProps = ({ overlayActive }) => {
	return { overlayActive }
}

const mapDispatchToProps = dispatch => {
	return { setOverlayActive: () => dispatch({ type: `SET_OVERLAY_ACTIVE` }) }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);