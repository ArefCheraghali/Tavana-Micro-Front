import React from "react";
import BaseInfoDataPage from "../Pages/BaseInfoDataPage/BaseInfoDataPage";
import BaseInfoTypePage from "../Pages/BaseInfoTypePage/BaseInfoTypePage";

export const routeItems = [
	{
		key: "/",
		path: "/",
		element: <div>Name: shared</div>,
	},
	// base type list
	{
		key: "/base-info-type",
		path: "/base-info-type",
		element: <BaseInfoTypePage />,
	},
	// base type edit
	{
		key: "/base-info-type/:id",
		path: "/base-info-type/:id",
		element: <BaseInfoTypePage />,
	},
	// base data list based on type id
	{
		key: "/base-info-data/:typeClassName",
		path: "/base-info-data/:typeClassName",
		element: <BaseInfoDataPage />,
	},
	// base data edit
	{
		key: "/base-info-data/:typeClassName/:id",
		path: "/base-info-data/:typeClassName/:id",
		element: <BaseInfoDataPage />,
	},
];
