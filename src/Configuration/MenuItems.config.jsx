import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";

const MenuItemTemp = ({ item }) => {
	return (
		/* custom element */
		<Link to={item.url}>
			<a className="menu-item">
				{item?.icon && item?.icon}
				{item?.label && <span className="text">{item.label}</span>}
			</a>
		</Link>
	);
};

export const MenuItems = [
	{
		label: "مشترکات",
		items: [
			{
				label: "اطلاعات پایه",
				url: "/base-info-type",
				icon: <RiInformationLine />,
				template: item => MenuItemTemp({ item }),
			},
		],
	},
];
