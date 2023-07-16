import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./RenderDataTable.scss";

const RenderDataTable = ({
	total = 0,
	data,
	loading,
	columns,
	header,
	query = { currentPage: 1, pageSize: 10, first: 0 },
	setQuery,
}) => {
	const dynamicColumns = columns.map((col, i) => {
		return <Column key={`${col.field}-${col.header}`} {...col} />;
	});

	const onPageChange = async event => {
		await setQuery({
			currentPage: event.page + 1,
			pageSize: event.rows,
			first: event.first,
		});
	};

	return (
		<div className="datatable-bg">
			<div className="card">
				<DataTable
					value={data}
					paginator
					first={query.currentPage}
					rows={query.pageSize}
					rowHover
					onPage={onPageChange}
					totalRecords={total}
					lazy
					paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
					rowsPerPageOptions={[10, 25, 50]}
					loading={loading}
					header={header}
				>
					{dynamicColumns}
				</DataTable>
			</div>
		</div>
	);
};

export default RenderDataTable;
