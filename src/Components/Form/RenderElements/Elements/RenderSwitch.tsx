import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { SwitchPropsType } from "./Types";

const RenderSwitch = ({ name, label, formik, ...rest }: SwitchPropsType) => {
	return (
		<div className="field">
			<span className="p-float-label">
				<InputSwitch
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

export default RenderSwitch;
