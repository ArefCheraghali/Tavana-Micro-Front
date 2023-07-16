import React from "react";
import { Dialog } from "primereact/dialog";

interface RenderDialogType {
	showMessage: boolean;
	setShowMessage: (arg0: boolean) => void;
	footer?: JSX.Element;
	content?: JSX.Element;
}

const RenderDialog = ({
	footer = <></>,
	showMessage = false,
	setShowMessage = () => {},
	content,
}: RenderDialogType) => {
	return (
		<Dialog
			visible={showMessage}
			onHide={() => setShowMessage(false)}
			position="top"
			footer={footer}
			showHeader={false}
			breakpoints={{ "960px": "80vw" }}
			style={{ width: "30vw" }}
		>
			<div className="flex align-items-center flex-column pt-6 px-3">
				{content ? (
					content
				) : (
					<>
						<i
							className="pi pi-check-circle"
							style={{ fontSize: "5rem", color: "var(--green-500)" }}
						></i>
						<h5>Registration Successful!</h5>
					</>
				)}
			</div>
		</Dialog>
	);
};

export default RenderDialog;
