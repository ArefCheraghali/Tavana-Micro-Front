import React from "react";
import { RenderElementPropsType } from "../Types";
import RenderInput from "./Elements/RenderInput";
import RenderPassword from "./Elements/RenderPassword";
import RenderDropdown from "./Elements/RenderDropdown";
import RenderCheckbox from "./Elements/RenderCheckbox";
import RenderNumber from "./Elements/RenderNumber";
import RenderSwitch from "./Elements/RenderSwitch";
import FileUpload from "./Elements/FileUpload";
import RenderRadioButton from "./Elements/RenderRadioButton";
import RenderInputTextarea from "./Elements/RenderInputTextarea";

const RenderElements = ({
	type,
	name,
	label,
	formik,
	items,
	...rest
}: RenderElementPropsType) => {
	switch (type) {
		case "text":
		case "email":
			return (
				<RenderInput name={name} label={label} formik={formik} {...rest} />
			);
		case "textarea":
			return (
				<RenderInputTextarea name={name} label={label} formik={formik} {...rest} />
			);
		case "password":
			return (
				<RenderPassword name={name} label={label} formik={formik} {...rest} />
			);
		case "dropdown":
			return (
				<RenderDropdown
					options={rest?.options ? rest?.options : []}
					value={rest?.value ? rest?.value : null}
					onChange={rest?.onChange ? rest?.onChange : () => {}}
					name={name}
					label={label}
					formik={formik}
					{...rest}
				/>
			);
		case "checkbox":
			return (
				<RenderCheckbox
					name={name}
					label={label}
					formik={formik}
					options={rest?.options}
				/>
			);
		case "number":
			return (
				<RenderNumber name={name} label={label} formik={formik} {...rest} />
			);
		case "switch":
			return (
				<RenderSwitch name={name} label={label} formik={formik} {...rest} />
			);
		case "radiobtn":
			return (
				<RenderRadioButton
					items={items}
					name={name}
					label={label}
					formik={formik}
					{...rest}
				/>
			);
		case "upload":
			return <FileUpload name={name} label={label} formik={formik} {...rest} />;
		default:
			return <>The type that you are looking for is not defined!</>;
	}
};

export default RenderElements;
