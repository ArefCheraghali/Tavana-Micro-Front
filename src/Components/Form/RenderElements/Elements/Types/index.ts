import { RenderElementPropsType } from "../../../Types";

interface SimilarElementPropsType
	extends Omit<RenderElementPropsType, "type"> {}

interface InputPropsType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
}

interface InputTextareaPropsType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
}

interface PasswordPropsType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
}

interface DropDownPropsType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
	options: any;
}

interface CheckboxType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
	options: any;
}

interface NumberPropsType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
}

interface SwitchPropsType extends SimilarElementPropsType {
	rest?: any;
	type?: string;
}

interface FileUploadPropsType extends SimilarElementPropsType {
	maxFileSize?: number;
	accept?: string;
	rest?: any;
	type?: string;
}

interface RadioButtonPropsType extends SimilarElementPropsType {
	items: [];
}

export type {
	InputPropsType,
	InputTextareaPropsType,
	PasswordPropsType,
	DropDownPropsType,
	CheckboxType,
	NumberPropsType,
	SwitchPropsType,
	FileUploadPropsType,
	RadioButtonPropsType,
};
