import React from "react";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { DropDownPropsType } from "./Types";

const RenderDropdown = ({
	name,
	label,
	formik,
	value,
	options,
	onChange,
	...rest
}: DropDownPropsType) => {
	return (
		<div className="field">
			<span className="p-float-label">
				<Dropdown
					id={name}
					name={name}
					className={classNames({
						"p-invalid": utils.isFormFieldValid({ name, formik }),
					})}
					value={value}
					options={options}
					onChange={value => {
						// @ts-ignore
						onChange && onChange(value);
					}}
					{...rest}
				/>
				{label && (
					<label
						htmlFor={name}
						className={classNames({
							"p-error": utils.isFormFieldValid({ name, formik }),
						})}
					>
						{label}
					</label>
				)}
			</span>
			{utils.getFormErrorMessage({ name, formik })}
		</div>
	);
};

export default RenderDropdown;
