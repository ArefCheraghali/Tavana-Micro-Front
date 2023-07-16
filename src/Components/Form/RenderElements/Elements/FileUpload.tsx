import React from "react";
import { FileUpload } from "primereact/fileupload";
import { FileUploadPropsType } from "./Types";

// ...rest can be multiple, auto, customUpload
// use accept if you want to restrict the type of file formats the user can upload
// maxFileSize is in bytes
// the rest can be: multiple, auto, customUpload and uploadHandler

const RenderFileUpload = ({
	name,
	url,
	accept,
	maxFileSize,
	onUpload,
	...rest
}: FileUploadPropsType) => {
	return (
		<FileUpload
			name={name}
			url={url}
			accept={accept}
			maxFileSize={maxFileSize}
			uploadHandler={onUpload}
			{...rest}
		/>
	);
};

export default RenderFileUpload;
