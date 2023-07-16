import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

import {
	columns,
	errorMessages,
	formElements,
	getList,
	handleCreate,
	title,
} from "../../Configuration/BaseInfoTypePage.config";
import regexPatterns from "../../Components/Form/regexPatterns";
import RenderForm from "../../Components/Form/RenderForm/RenderForm";
import useAxios from "../../Hooks/useAxios";
import RenderDataTable from "../../Components/RenderDataTable/RenderDataTable";
import PageLayout from "../../Components/PageLayout/PageLayout";
import SwitchPageButton from "../../Components/SwitchPageButton/SwitchPageButton";
import { useNavigate, useParams } from "react-router";

const BaseInfoTypePage = () => {
	const { id } = useParams();
	const [renderFormElements, setRenderFormElements] = useState([]);
	const [renderColumns, setRenderColumns] = useState([]);
	const { sendRequest } = useAxios();
	const [data, setData] = useState([
		{
			data: [],
			total: 0,
		},
	]);
	const [query, setQuery] = useState({
		currentPage: 1,
		pageSize: 10,
		count: 0,
	});
	const [loading, setLoading] = useState(true);
	const [modify, setModify] = useState(false);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			title: "",
			className: "",
			isActive: true,
			description: "",
		},
		validate: data => {
			let errors = {};
			if (!data.title) {
				errors.title = errorMessages.title;
			}

			if (!data.className) {
				errors.className = errorMessages.classname.empty;
			} else if (!/^[A-Za-z]+$/i.test(data.email)) {
				errors.className = errorMessages.classname.regex;
			}

			return errors;
		},
		onSubmit: data => {
			handleCreate({ formik, setData, setLoading, sendRequest });
		},
	});

	useEffect(() => {
		if (id) {
			setModify(true);
		}
	}, [id]);

	useEffect(() => {
		if (formik) setRenderFormElements(formElements({ formik }));
	}, [formik.values]);

	useEffect(() => {
		if (formik) setRenderColumns(columns({ sendRequest, setData, setLoading }));
	}, [formik.values]);

	useEffect(() => {
		getList({ query, sendRequest, setData, setLoading });
	}, [query]);

	return (
		<PageLayout title={title}>
			<SwitchPageButton
				modify={modify}
				setModify={setModify}
				additionalCallback={() => {
					navigate("/base-info-type");
				}}
			/>

			{modify ? (
				<RenderForm formik={formik} formElements={renderFormElements} />
			) : (
				<RenderDataTable
					total={data?.count ? data?.count : 0}
					query={query}
					setQuery={setQuery}
					data={data.data}
					loading={loading}
					columns={renderColumns}
				/>
			)}
		</PageLayout>
	);
};

export default BaseInfoTypePage;
