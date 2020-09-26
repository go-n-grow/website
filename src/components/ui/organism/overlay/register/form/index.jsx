import React, { Component } from "react";
import { cn } from "reusable-components/dist/helper";
import Asset from "../../../../atom/asset";
// import PropTypes from "prop-types";

import Styles from "./index.module.scss";

export default class Form extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	render () {
		return (
			<form className={ Styles.form }>
				<div className={ Styles.header }>
					<Asset
						className={ Styles.teaserImg }
						graphic={ "hi" }
					/>

					<p>
						Wir, das <strong><i>»Go ’n’ Grow«</i></strong>-Team, freuen uns, dass Sie an unserem Projekt teilhaben wollen! Die Anmeldung ist super simpel, nicht bindend und dauert maximal eine Minute.
					</p>

					<hr />
				</div>

				<Input
					id={ "shopName" }
					label={ "Name Ihres Geschäfts:" }
					placeholder={ "Bar XYZ" }
				/>

				<Input
					id={ "address" }
					label={ "Adresse:" }
					placeholder={ "Brandenburger Str." }
				/>

				<Input
					id={ "mail" }
					label={ "E-Mail (für Rückfragen):" }
					placeholder={ "ihre@email.de" }
				/>

				<hr/>

				<Checkbox
					id={ "gdprAccept" }
					label={ "Hiermit akzeptiere ich die Übermittlung und Verarbeitung meiner Daten " }
				/>
			</form>
		);
	}
}

const Input = ({ id, label, type = "text", onChange, ...props }) =>
	<div className={ Styles.field }>
		<label
			className={ "has-text-dark" }
			htmlFor={ id }>
			{ label }
		</label>

		<input
			id={ id }
			type={ type }
			onChange={ onChange }
			{ ...props }
		/>
	</div>;

const Checkbox = ({ id, label, onChange, ...props }) =>
	<div className={ cn(
		Styles.field,
		Styles.isCheckbox
	) }>
		<input
			id={ id }
			type={ "checkbox" }
			onChange={ onChange }
			{ ...props }
		/>

		<label
			className={ "has-text-dark" }
			htmlFor={ id }>
			{ label }
		</label>
	</div>;