import React from "react";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { PasswordPropsType } from "./Types";
import { Divider } from "primereact/divider";

const RenderPassword = ({ name, label, formik, rest }: PasswordPropsType) => {
	const passwordHeader = <h6>انتخاب کلمه عبور</h6>;
	const passwordFooter = (
		<>
			<Divider />
			<p className="mt-2">پیشنهاد کلمه عبور</p>
			<ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
				<li>حداقل یک کاراکتر انگلیسی کوچک</li>
				<li>حداقل یک کاراکتر انگلیسی بزرگ</li>
				<li>حداقل یک عدد</li>
				<li>حداقل 8 کاراکتر برای طول کلمه عبور</li>
			</ul>
		</>
	);

	return (
		<div className="field">
			<span className="p-float-label">
				<Password
					id={name}
					name={name}
					className={classNames({
						"p-invalid": utils.isFormFieldValid({ name, formik }),
					})}
					value={formik.values[name]}
					onChange={formik.handleChange}
					header={rest?.header ? rest?.header : passwordHeader}
					footer={rest?.footer ? rest?.footer : passwordFooter}
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

export default RenderPassword;
