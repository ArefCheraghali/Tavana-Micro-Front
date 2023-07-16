import React from "react";
import { classNames } from "primereact/utils";
import utils from "../Components/Form/utils";
import { Button } from "primereact/button";
import { TbListDetails } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export const title = "نوع اطلاعات پایه";
export const endpoint = "common-base-types";
// export const endpoint = "todos";

export const errorMessages = {
	title: "لطفا عنوان را وارد نمایید!",
	classname: {
		empty: "لطفا کلید را وارد نمایید!",
		regex: "فقط کاراکتر انگلیسی مجاز است!",
	},
};

export const formElements = ({ formik }) => {
	return [
		{
			type: "text",
			label: "عنوان",
			name: "title",
			formik: formik,
			value: formik.values.title,
			onChange: formik.handleChange,
			autoFocus: true,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "title", formik }),
			}),
		},
		{
			type: "text",
			label: "کلید",
			name: "className",
			formik: formik,
			value: formik.values.className,
			onChange: formik.handleChange,
			className: classNames({
				"p-invalid": utils.isFormFieldValid({ name: "className", formik }),
			}),
		},
		{
			type: "switch",
			label: "فعال",
			name: "isActive",
			formik: formik,
			value: formik.values.isActive,
			onChange: formik.handleChange,
		},
		{
			type: "textarea",
			label: "توضیحات",
			name: "description",
			formik: formik,
			value: formik.values.description,
			onChange: formik.handleChange,
		},
	];
};

export const handleCreate = ({ formik, setData, setLoading, sendRequest }) => {
	const formValues = formik.values;
	const data = { ...formValues };
	console.log(formValues);

	setLoading(true);

	const tempQuery = {
		method: "post",
		url: endpoint,
		data,
		successFunction: res => {
			console.log(res);
			setLoading(false);
			formik.resetForm();
			getList({ sendRequest, setData, setLoading });
		},
	};
	sendRequest(tempQuery);
};

const handleDelete = () => {
	debugger;
	console.log("here");
	setLoading(true);
	getList({ sendRequest, setData, setLoading });
};

const handleDataBtn = () => {
	useNavigate;
};

export const getList = ({ query, sendRequest, setData, setLoading }) => {
	const tempQuery = {
		url: `${endpoint}?currentPage=${query.currentPage}&pageSize=${query.pageSize}`,
		successFunction: res => {
			setData({
				data: res.data.data.rows,
				count: res.data.data.count,
			});
			setLoading(false);
		},
	};
	sendRequest(tempQuery);
};

const actionBodyTemplate = ({ rowData, sendRequest, setData, setLoading }) => {
	return (
		<div className="data-table-btn">
			<Button
				type="button"
				className="p-button-secondary"
				onClick={handleDataBtn}
			>
				<Link to={`/base-info-data/${rowData?.className}`}>
					<TbListDetails />
				</Link>
			</Button>
			<Button type="button" className="p-button-info">
				<Link to={`/base-info-type/${rowData?.className}`}>
					<MdEdit />
				</Link>
			</Button>
			<Button
				type="button"
				className="p-button-danger"
				onClick={() => {
					debugger;
					const tempQuery = {
						method: "delete",
						url: `${endpoint}/${rowData?.id}`,
						successFunction: res => handleDelete,
					};
					sendRequest(tempQuery);
				}}
			>
				<AiFillDelete />
			</Button>
		</div>
	);
};

export const columns = ({ sendRequest, setData, setLoading }) => {
	return [
		{
			field: "title",
			header: "عنوان",
			sortable: true,
			style: { minWidth: "8rem" },
		},
		{
			field: "className",
			header: "کلید",
			sortable: true,
			style: { minWidth: "8rem" },
		},
		{
			field: "isActive",
			header: "وضعیت",
			sortable: true,
			style: { minWidth: "3rem" },
			body: rowData => <>{rowData.isActive ? "فعال" : "غیر فعال"}</>,
		},
		{
			field: "description",
			header: "توضیحات",
			style: { minWidth: "8rem" },
		},
		{
			header: "عملیات",
			headerStyle: { width: "12rem", textAlign: "center" },
			bodyStyle: { textAlign: "center", overflow: "visible" },
			body: rowData =>
				actionBodyTemplate({ rowData, sendRequest, setData, setLoading }),
		},
	];
};
