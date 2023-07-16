import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { MenuItems } from "../../Configuration/MenuItems.config";

const RenderMenu = () => {
	return <PanelMenu model={MenuItems} />;
};

export default RenderMenu;
