import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import RenderDataTable from "../Components/RenderDataTable/RenderDataTable";
import useAxios from "../Hooks/useAxios";

const UseAxiosExample = () => {
	const [loading, setLoading] = useState(true);
	const { sendRequest } = useAxios();
	const [data, setData] = useState([]);

	useEffect(() => {
		sendRequest({
			url: "todos",
			successFunction: res => {
				setData(res);
				setLoading(false);
			},
		});
	}, []);

	const actionBodyTemplate = () => {
		return <Button type="button" icon="pi pi-cog">Action</Button>;
	};

	const completedTemplate = item => {
		return <>{JSON.stringify(item.completed)}</>;
	};

	const columns = [
		{
			field: "selectionMode",
			selectionMode: "multiple",
			selectionAriaLabel: "title",
			headerStyle: { width: "3em" },
		},
		{
			field: "title",
			header: "title",
			sortable: true,
			filter: true,
			filterPlaceholder: "جستجو بر اساس عنوان",
			style: { minWidth: "14rem" },
		},
		{
			field: "completed",
			header: "completed",
			sortable: true,
			filter: true,
			filterPlaceholder: "جستجو بر اساس عنوان",
			style: { minWidth: "14rem" },
			body: completedTemplate,
		},
		{
			header: "actions",
			headerStyle: { width: "4rem", textAlign: "center" },
			bodyStyle: { textAlign: "center", overflow: "visible" },
			body: actionBodyTemplate,
		},
	];

	return (
		<>
			<h1>use axios example</h1>
			{/* {loading ? <>loading data</> : <>{JSON.stringify(data)}</>} */}
			<RenderDataTable
				data={data}
				loading={loading}
				columns={columns}
				header={
					<div className="flex justify-content-between align-items-center">
						<h5 className="m-0">title</h5>
					</div>
				}
			/>
		</>
	);
};

export default UseAxiosExample;
