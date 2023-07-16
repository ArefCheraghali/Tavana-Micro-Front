import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import utils from "../../utils";
import { RadioButtonPropsType } from "./Types";

const RenderRadioButton = ({
	items,
	name,
	label,
	formik,
	...rest
}: RadioButtonPropsType) => {
	const [selectedItem, setSelectedItem] = useState("");
	const RadioButtonComponent = RadioButton as any;

	return (
		<div className="field">
			<div>
				{items.map((item: any) => {
					return (
						<div
							className="field-radiobutton"
							style={{ margin: "5px 5px 5px 0" }}
							key={`${item.key}-${item.name}`}
						>
							<RadioButtonComponent
								inputId={item.key}
								name={item.name}
								value={item.value}
								onChange={(e: any) => setSelectedItem(e.target.name)}
								checked={selectedItem === item.name}
								disabled={item.disabled}
								{...rest}
							/>
							<label htmlFor={item.key} style={{ marginLeft: "8px" }}>
								{item.name}
							</label>
						</div>
					);
				})}
			</div>

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
			{utils.getFormErrorMessage({ name, formik })}
		</div>
	);
};

export default RenderRadioButton;
