import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "react-bulma-components/lib/components/button/button";
import ButtonGroup from "react-bulma-components/lib/components/button/components/button-group";
import { cn } from "reusable-components/dist/helper";

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
			name: "",
			address: "",
			mail: "",
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
			name,
			address,
			mail,
		} = this.state.form;

		const body = JSON.stringify({
			name,
			address,
			mail,
		});

		const data = await fetch(
			"/php/send-patch-mail.php",
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
					name: "",
					address: "",
					mail: "",
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
					<Input
						disabled={ this.state.isSending }
						id={ "name" }
						name={ "name" }
						label={ "Vor- und Nachname" }
						placeholder={ "Max Mustermann" }
						value={ this.state.form.name }
						onChange={ this.onChange.bind(this) }
					/>

					<Input
						disabled={ this.state.isSending }
						id={ "address" }
						name={ "street-address" }
						label={ "Adresse:" }
						value={ this.state.form.address }
						placeholder={ "Schildergasse 90, 50667 Köln" }
						onChange={ this.onChange.bind(this) }
					/>

					<Input
						disabled={ this.state.isSending }
						id={ "mail" }
						type={ "email" }
						name={ "email" }
						value={ this.state.form.mail }
						label={ "E-Mail (für Rückfragen):" }
						onChange={ this.onChange.bind(this) }
						placeholder={ "max@mustermann.de" }
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
						Beet-Kit anfragen →
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