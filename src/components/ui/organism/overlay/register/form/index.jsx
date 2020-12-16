import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "react-bulma-components/lib/components/button/button";
import ButtonGroup from "react-bulma-components/lib/components/button/components/button-group";
import { cn } from "reusable-components/dist/helper";

import Asset from "../../../../atom/asset";
import Styles from "./index.module.scss";


export default class Form extends Component {
	static propTypes = {
		onDone: PropTypes.func.isRequired,
		onError: PropTypes.func.isRequired
	};

	static defaultProps = {};

	formRef = React.createRef();

	state = {
		form: {
			shopName: "",
			address: "",
			mail: "",
			owner: "",
			message: "",
			gdprAccept: false,
		},
		isValid: true,
		isSending: false,
		sendStatus: false
	};

	onChange ({ target }) {
		const {
			id,
			value,
		} = target;

		const isFormValid = this.formRef.current.checkValidity();
		let isValid;

		if (id === "gdprAccept") {
			isValid =
				isFormValid &&
				!this.state.form.gdprAccept;
		} else {
			isValid =
				isFormValid &&
				this.state.form.gdprAccept;
		}

		this.setState({
			...this.state,
			isValid,
			form: {
				...this.state.form,
				[id]: value,
			},
		});
	}

	async sendForm () {
		const {
			mail, address,
			shopName: shop,
			owner,
			message,
		} = this.state.form;

		const body = JSON.stringify({
			mail,
			address,
			shop,
			owner,
			message
		});

		const data = await fetch(
			"/php/send-mail.php",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body
			}
		);

		if (data.status === 200) {
			this.setState({
				form: {
					shopName: "",
					address: "",
					mail: "",
					owner: "",
					message: "",
					gdprAccept: false,
				},
				isValid: false
			}, () => {
				this.props.onDone();
			});
		} else {
			console.error(data);
			this.props.onError();
		}
	}

	handleSubmit (event) {
		event.preventDefault();

		this.setState({
			...this.state,
			isSending: true,
		}, async () => {
			await this.sendForm();
		});

		return false;
	}

	render () {
		return (
			<form
				ref={ this.formRef }
				className={ Styles.form }
				onSubmit={ this.handleSubmit.bind(this) }>

				<div className={ Styles.contentWrapper }>
					<div className={ Styles.header }>
						<Asset
							className={ Styles.teaserImg }
							graphic={ "hi" }
						/>

						<p>
							Wir, das <strong><i>»Go ’n’ Grow«</i></strong>-Team, freuen uns, dass Sie an unserem Projekt
							teilhaben wollen! Die Anmeldung ist super simpel, nicht bindend und dauert maximal eine Minute.
							Weitere Informationen bekommen Sie nach der Anmeldung von uns via E-Mail zugesandt.
							<strong>Zusammen bringen wir unsere Stadt zum blühen!</strong>
						</p>

						<hr/>
					</div>

					<Input
						disabled={ this.state.isSending }
						id={ "shopName" }
						label={ "Name des Geschäfts:" }
						placeholder={ "Geschäft XYZ" }
						value={ this.state.form.shopName }
						onChange={ this.onChange.bind(this) }
					/>

					<Input
						disabled={ this.state.isSending }
						id={ "owner" }
						label={ "Geschäftsinhaber:" }
						placeholder={ "Max Mustermann" }
						value={ this.state.form.owner }
						onChange={ this.onChange.bind(this) }
					/>

					<Input
						disabled={ this.state.isSending }
						id={ "address" }
						label={ "Adresse:" }
						value={ this.state.form.address }
						placeholder={ "Brandenburger Str. 123, 12345 Stadt XY" }
						onChange={ this.onChange.bind(this) }
					/>

					<Input
						disabled={ this.state.isSending }
						id={ "mail" }
						type={ "email" }
						value={ this.state.form.mail }
						label={ "E-Mail (für Rückfragen):" }
						onChange={ this.onChange.bind(this) }
						placeholder={ "ihre@email.de" }
					/>

					<Textarea
						disabled={ this.state.isSending }
						id={ "message" }
						value={ this.state.form.message }
						label={ "Anmerkungen:" }
						onChange={ this.onChange.bind(this) }
						placeholder={ "Fragen, Wünsche, Ideen, Feedback … ?" }
					/>

					<hr/>

					<Checkbox
						id={ "gdprAccept" }
						disabled={ this.state.isSending }
						checked={ this.state.form.gdprAccept }
						label={ "Hiermit akzeptiere ich die Übermittlung und Verarbeitung meiner personenbezogenen Daten." }
						onChange={ this.onChange.bind(this) }
					/>
				</div>

				<ButtonGroup
					position={ "centered" }
					className={ Styles.submitWrapper }>
					<Button
						submit
						color={ "primary" }
						loading={ this.state.isSending }
						disabled={ !this.state.isValid }>
						Jetzt Anmelden
					</Button>
				</ButtonGroup>
			</form>
		);
	}
}

const Input = ({ id, label, type = "text", onChange, value, ...props }) =>
	<div className={ Styles.field }>
		<label
			className={ "has-text-dark" }
			htmlFor={ id }>
			{ label }
		</label>

		<input
			required
			id={ id }
			type={ type }
			onChange={ onChange }
			{ ...props }
		/>
	</div>;

const Textarea = ({ id, label, onChange, value, ...props }) =>
	<div className={ Styles.field }>
		<label
			className={ "has-text-dark" }
			htmlFor={ id }>
			{ label }
		</label>

		<textarea
			id={ id }
			onChange={ onChange }
			{ ...props }
		/>
	</div>;

const Checkbox = ({ id, label, checked, onChange, disabled, ...props }) => {
	const onChangeHandler = disabled ? undefined :
		() => onChange({ target: { id, value: !checked } });

	return (
		<div
			role={ "checkbox" }
			tabIndex={ 0 }
			aria-checked={ checked }
			aria-label={ label }
			className={ cn(
				Styles.field,
				Styles.isCheckbox,
				checked && Styles.isChecked,
			) }
			onKeyPress={ onChangeHandler }
			onClick={ onChangeHandler }>

			<div
				className={ Styles.checkbox }
				id={ id }
				{ ...props }
			/>

			<label className={ "has-text-dark" }>
				{ label }
			</label>
		</div>
	);
};