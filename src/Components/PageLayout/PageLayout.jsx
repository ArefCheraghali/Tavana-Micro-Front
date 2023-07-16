import React from "react";
import "./PageLayout.scss";

const PageLayout = ({ title = "", children }) => {
	return (
		<div className="page-layout">
			{title && <h3 className="page-title">{title}</h3>}
			<div className="page-container">{children}</div>
		</div>
	);
};

export default PageLayout;
