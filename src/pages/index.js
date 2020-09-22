import React from "react";

import Header from "../components/home/header/index.jsx";
import Explanation from "../components/home/explanation/index.jsx";
import Map from "../components/home/map/index.jsx";
import RegisterInterferer from "../components/home/register-interferer";


export default () =>
	<>
		<Header />
		<Explanation />
		<RegisterInterferer />
		<Map />
	</>;