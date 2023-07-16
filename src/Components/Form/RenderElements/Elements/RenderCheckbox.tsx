import React from "react";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { InputPropsType } from "./Types";

const RenderCheckbox = ({ name, label, formik, ...rest }: InputPropsType) => {
	return (
		<div className="field">
			<span className="p-float-label">
				<Checkbox
					id={name}
					name={name}
					className={classNames({
						"p-invalid": utils.isFormFieldValid({ name, formik }),
					})}
					checked={formik.values[name]}
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

export default RenderCheckbox;
