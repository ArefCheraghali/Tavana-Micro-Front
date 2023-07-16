import React from "react";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { NumberPropsType } from "./Types";

const RenderInputNumber = ({
	name,
	label,
	formik,
	...rest
}: NumberPropsType) => {
	const InputNumberComponent = InputNumber as any;
	return (
		<div className="field">
			<span className="p-float-label">
				<InputNumberComponent
					id={name}
					name={name}
					className={classNames({
						"p-invalid": utils.isFormFieldValid({ name, formik }),
					})}
					value={formik.values[name]}
					onValueChange={formik.handleChange}
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

export default RenderInputNumber;
