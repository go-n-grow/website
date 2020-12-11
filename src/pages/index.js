import React from "react";
import { connect } from "react-redux";

import Header from "../components/home/header/index.jsx";
import Explanation from "../components/home/explanation/index.jsx";
import Map from "../components/home/map/index.jsx";
import RegisterInterferer from "../components/home/register-interferer";
import Footer from "../components/layout/footer";
import Page from "../components/layout/page";
import Nav from "../components/ui/organism/nav";
import RegisterOverlay from "../components/ui/organism/overlay/register";


const App = ({ overlayActive, setOverlayActive }) => {
	return (
		<Page subTitle={ "Willkommen" }>
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

		</Page>
	);
};

const mapStateToProps = ({ overlayActive }) => {
	return { overlayActive }
}

const mapDispatchToProps = dispatch => {
	return { setOverlayActive: () => dispatch({ type: `SET_OVERLAY_ACTIVE` }) }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);