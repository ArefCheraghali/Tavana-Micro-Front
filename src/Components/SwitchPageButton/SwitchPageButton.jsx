import React from "react";
import { Button } from "primereact/button";

const SwitchPageButton = ({
	modify,
	setModify,
	additionalCallback,
	addText = "اضافه کردن",
	listText = "نمایش لیست",
}) => {
	return (
		<div className="mb-1 d-inline-block ant-table-wrapper">
			<Button
				htmltype="button"
				className="float-end p-button-info"
				onClick={() => {
					setModify(!modify);
					if (additionalCallback) additionalCallback();
				}}
			>
				{modify ? listText : addText}
			</Button>
		</div>
	);
};

export default SwitchPageButton;
