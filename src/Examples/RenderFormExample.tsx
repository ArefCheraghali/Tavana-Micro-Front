import React, { useState } from "react";
import { useFormik } from "formik";
import RenderForm from "../Components/Form/RenderForm/RenderForm";
import { Button } from "primereact/button";
import { RenderElementPropsType } from "../Components/Form/Types";
import { classNames } from "primereact/utils";
import utils from "../Components/Form/utils";
import { Divider } from "primereact/divider";

const RenderFormExample = () => {
	const [showMessage, setShowMessage] = useState(false);
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			phoneNumber: "",
			dropdown: "",
			checkbox: "",
			id: "",
			toggle: false,
			upload: null,
			value: null,
		},
		validate: data => {
			let errors: any = {};
			if (!data.name) {
				errors.name = "Name is required.";
			}

			if (!data.email) {
				errors.email = "Email is required.";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
			) {
				errors.email = "Invalid email address. E.g. example@email.com";
			}

			if (!data.password) {
				errors.password = "Password is required.";
			}

			return errors;
		},
		onSubmit: data => {
			setShowMessage(true);

			formik.resetForm();
		},
	});
	const passwordHeader = <h6>Pick a password</h6>;
	const passwordFooter = (
		<>
			<Divider />
			<p className="mt-2">Suggestions</p>
			<ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
				<li>At least one lowercase</li>
				<li>At least one uppercase</li>
				<li>At least one numeric</li>
				<li>Minimum 8 characters</li>
			</ul>
		</>
	);

	const [selectedDropdwon, setSelectedDropdwon] = useState(null);
	const options = [
		{ name: "Australia", code: "AU" },
		{ name: "Brazil", code: "BR" },
		{ name: "China", code: "CN" },
		{ name: "Egypt", code: "EG" },
		{ name: "France", code: "FR" },
		{ name: "Germany", code: "DE" },
		{ name: "India", code: "IN" },
		{ name: "Japan", code: "JP" },
		{ name: "Spain", code: "ES" },
		{ name: "United States", code: "US" },
	];
	const onSelectChange = e => {
		setSelectedDropdwon(e.value);
	};
	const selectedTemplate = (option, props) => {
		if (option) {
			return (
				<div className="country-item country-item-value">
					<img
						alt={option?.name}
						src="images/flag/flag_placeholder.png"
						onError={e =>
							(e.target.src =
								"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
						}
						className={`flag flag-${option?.code?.toLowerCase()}`}
					/>
					<div>{option?.name}</div>
				</div>
			);
		}

		return <span>{props?.placeholder}</span>;
	};

	const optionTemplate = option => {
		return (
			<div className="country-item">
				<img
					alt={option?.name}
					src="images/flag/flag_placeholder.png"
					onError={e =>
						(e.target.src =
							"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
					}
					className={`flag flag-${option?.code.toLowerCase()}`}
				/>
				<div>{option?.name}</div>
			</div>
		);
	};
	const formElements: RenderElementPropsType[] = [
		{
			type: "text",
			label: "نام",
			name: "name",
			formik: formik,
			value: formik.values.name,
			onChange: formik.handleChange,
			autoFocus: true,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "name", formik }),
			}),
		},
		{
			type: "text",
			label: "شماره تلفن",
			name: "phoneNumber",
			formik: formik,
			value: formik.values.phoneNumber,
			onChange: formik.handleChange,
			autoFocus: true,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "phoneNumber", formik }),
			}),
		},
		{
			type: "email",
			name: "email",
			formik: formik,
			value: formik.values.email,
			onChange: formik.handleChange,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "email", formik }),
			}),
		},
		{
			type: "password",
			name: "password",
			formik: formik,
			value: formik.values.password,
			onChange: formik.handleChange,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "password", formik }),
			}),
			toggleMask: true,
			header: passwordHeader,
			footer: passwordFooter,
		},
		{
			type: "dropdown",
			name: "dropdown",
			formik: formik,
			options: options,
			value: selectedDropdwon,
			onChange: onSelectChange,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "dropdown", formik }),
			}),
			optionLabel: "name",
			filter: true,
			showClear: true,
			filterBy: "name",
			placeholder: "Select a Country",
			valueTemplate: selectedTemplate,
			itemTemplate: optionTemplate,
		},
		{
			type: "checkbox",
			label: "checkbox",
			formik: formik,
			name: "checkbox",
		},
		{
			type: "number",
			label: "id",
			formik: formik,
			name: "id",
		},
		{
			type: "switch",
			label: "toggle",
			formik: formik,
			name: "toggle",
		},
		{
			type: "upload",
			label: "upload",
			formik: formik,
			name: "upload",
			accept: ".jpg,.png,.pdf",
			onUpload: e => {},
		},
		{
			type: "radiobtn",
			label: "radioBtn",
			formik: formik,
			name: "radio",
			items: [
				{ name: "sth1", key: "sth1" },
				{ name: "sth2", key: "sth2" },
				{ name: "sth3", key: "sth3" },
			],
		},
	];

	return (
		<>
			<h1>form example</h1>
			<RenderForm
				formik={formik}
				formElements={formElements}
				dialog={{
					showMessage: showMessage,
					setShowMessage: setShowMessage,
					content: (
						<>
							<i
								className="pi pi-check-circle"
								style={{ fontSize: "5rem", color: "var(--green-500)" }}
							></i>
							<h5>Registration Successful!</h5>
							<p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
								Your account is registered under name.
							</p>
						</>
					),
					footer: (
						<div className="flex justify-content-center">
							<Button
								label="OK"
								className="p-button-text"
								autoFocus
								onClick={() => setShowMessage(false)}
							/>
						</div>
					),
				}}
			/>
		</>
	);
};

export default RenderFormExample;
