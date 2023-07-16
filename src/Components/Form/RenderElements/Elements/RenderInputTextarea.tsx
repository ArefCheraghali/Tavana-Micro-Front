import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { InputTextareaPropsType } from "./Types";

const RenderInputTextarea = ({
	name,
	label,
	formik,
	...rest
}: InputTextareaPropsType) => {
	return (
		<div className="field">
			<span className="p-float-label">
				<InputTextarea
					id={name}
					name={name}
					className={classNames({
						"p-invalid": utils.isFormFieldValid({ name, formik }),
					})}
					value={formik.values[name]}
					onChange={formik.handleChange}
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

export default RenderInputTextarea;
