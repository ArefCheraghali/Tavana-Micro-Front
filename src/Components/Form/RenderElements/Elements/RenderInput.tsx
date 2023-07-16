import React from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { InputPropsType } from "./Types";

const RenderInput = ({ name, label, formik, ...rest }: InputPropsType) => {
	return (
		<div className="field">
			<span className="p-float-label">
				<InputText
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

export default RenderInput;
