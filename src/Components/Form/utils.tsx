import React from "react";

const isFormFieldValid = ({ name, formik }: { name: string; formik: any }) =>
	!!(formik.touched[name] && formik.errors[name]);

const getFormErrorMessage = ({
	name,
	formik,
}: {
	name: string;
	formik: any;
}) => {
	return (
		isFormFieldValid({ name, formik }) && (
			<small className="p-error">{formik.errors[name]}</small>
		)
	);
};

const regexToString = (regex: any) => {
	const regexToObject = { flags: regex.flags, source: regex.source };
	return JSON.stringify(regexToObject);
};

const stringToRegex = (string: string) => {
	const stringToObject = JSON.parse(string);
	return new RegExp(stringToObject.source, stringToObject.flags);
};

export default {
	isFormFieldValid,
	getFormErrorMessage,
	regexToString,
	stringToRegex,
};
