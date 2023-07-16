import { useContext } from "react";
import ToastContext from "../Context/ToastContext";

export const useErrorHandler = () => {
	const { setToastObject } = useContext(ToastContext);
	let status = null;
	let message;

	const setNotification = (stats, msg) => {
		if (stats) status = stats;
		if (msg) message = msg;

		if (!msg && stats) {
			switch (status) {
				case 200:
					message = null;
					break;

				case 204:
					message = "داده‌ای یافت نشد";
					break;

				case 400:
					message = "خطا در داده های ارسال شده";
					break;

				case 401:
					message = "مجوز دسترسی ندارید";
					break;

				case 403:
					message = "زمان نشست شما به اتمام رسید";
					break;

				case 404:
					message = "خطا در دریافت اطلاعات";
					break;

				case 409:
					message = "داده تکراری میباشد";
					break;

				case 500:
					message = "پاسخی از سمت سرور دریافت نشد";
					break;

				case "failed":
					message = "خطا در بر قراری ارتباط";
					break;

				default:
					message = "پیامی برای نمایش دریافت نشد";
					break;
			}
		}

		if (stats && message)
			setToastObject({
				severity: "error",
				summary: "خطا",
				detail: message,
				life: 3000,
			});
	};

	return { setNotification };
};
