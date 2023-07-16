import { ReactElement } from "react";

type elementsType =
	| "text"
	| "email"
	| "textarea"
	| "password"
	| "dropdown"
	| "checkbox"
	| "switch"
	| "upload"
	| "radiobtn"
	| "number";
type elementsValueType = boolean | string | number | {} | null;
type onChangeFunctionType = (
	arg0?: elementsValueType,
	arg1?: elementsValueType,
	arg2?: elementsValueType,
) => void;

interface RenderElementPropsType {
	type: elementsType;
	name: string;
	formik: any;
	label?: string | undefined;
	options?: any[] | undefined;
	value?: elementsValueType;
	onChange?: onChangeFunctionType;
	autoFocus?: boolean;
	className?: string;
	toggleMask?: boolean;
	header?: JSX.Element;
	footer?: JSX.Element;
	optionLabel?: string;
	filter?: boolean;
	showClear?: boolean;
	filterBy?: string;
	placeholder?: string;
	valueTemplate?: any;
	itemTemplate?: any;
	checked?: boolean;
	url?: string;
	accept?: string;
	items?: any;
	onUpload?: (arg0: any) => void;
}

export type { RenderElementPropsType };
