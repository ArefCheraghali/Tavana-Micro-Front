import React from "react";
import { Button } from "primereact/button";
import RenderElements from "../RenderElements/RenderElements";
import RenderDialog from "../RenderDialog/RenderDialog";
import { Col, Row } from "react-bootstrap";
import { Skeleton } from "primereact/skeleton";

interface RenderFormType {
	title?: string;
	submitLable?: string;
	formik: any;
	dialog?: {
		showMessage: boolean;
		setShowMessage: (arg0: boolean) => void;
		footer?: JSX.Element;
		content?: JSX.Element;
	};
	formElements: any;
}

const RenderForm = ({
	title,
	submitLable = "ثبت",
	formik,
	dialog,
	formElements,
}: RenderFormType) => {
	return (
		<div className="form-bg card">
			{dialog && (
				<RenderDialog
					showMessage={dialog.showMessage}
					setShowMessage={dialog.setShowMessage}
					footer={dialog?.footer}
					content={dialog?.content}
				/>
			)}
			<div className="flex justify-content-center">
				{title && <h5 className="form-title">title</h5>}
				{!formElements || formElements.length < 1 ? (
					<div className="p-3">
						<Skeleton className="mb-2"></Skeleton>
						<Skeleton width="10rem" className="mb-2"></Skeleton>
						<Skeleton width="5rem" className="mb-2"></Skeleton>
					</div>
				) : (
					<form onSubmit={formik.handleSubmit} className="p-fluid">
						<Row className="form-row">
							{formElements.map(item => (
								<Col
									key={item.name}
									xxl={item?.size?.xxl ? item?.size?.xxl : 6}
									xl={item?.size?.xl ? item?.size?.xl : 6}
									lg={item?.size?.lg ? item?.size?.lg : 6}
									md={item?.size?.md ? item?.size?.md : 6}
									sm={item?.size?.sm ? item?.size?.sm : 6}
									xs={item?.size?.xs ? item?.size?.xs : 6}
								>
									<RenderElements {...item} />
								</Col>
							))}
						</Row>

						<Button type="submit" label={submitLable} className="mt-2" />
					</form>
				)}
			</div>
		</div>
	);
};

export default RenderForm;
