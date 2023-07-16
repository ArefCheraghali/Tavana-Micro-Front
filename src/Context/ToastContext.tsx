import { Context, createContext } from "react";

const ToastContext: Context<{
	toastObject: any;
	setToastObject: (arg0: any) => void;
}> = createContext({
	toastObject: null,
	setToastObject: arg0 => {},
});

export default ToastContext;
