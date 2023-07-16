import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useErrorHandler } from "./useErrorHandler";

const useAxios = () => {
	const { setNotification } = useErrorHandler();

	const token = ""; // useAppSelector(state => state.user.token);
	const staticToken =
		"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFc296OFJYR0JwdERoQXE2NUROTjE5UW9NZThfYk5rVXRmcGZTVk1pM1dVIn0.eyJleHAiOjE2ODk1NDMwNjYsImlhdCI6MTY4OTU0MTI2NiwianRpIjoiZWI0NGJlZWYtMmI4Ni00YTFmLWI3ZGItM2Y5NDlmZTMwYzQ5IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMTIwLjE0OTo5MDgwL2F1dGgvcmVhbG1zL3RhdmFuYSIsImF1ZCI6WyJiYXNlX2luZm9ybWF0aW9uX3VpIiwiZnVuZF9zcnYiLCJhY2NvdW50Il0sInN1YiI6ImFkZGE5N2M1LTlmM2UtNGRhOC04OWQ4LTc2OWU1ZGM1NWI0MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJhc2VfaW5mb3JtYXRpb25fc3J2Iiwic2Vzc2lvbl9zdGF0ZSI6IjE1MTM0Y2VlLTIzYjMtNGMwNi1iMzMyLTdhMmRhNTg2YjRiYSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRhdmFuYSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYmFzZV9pbmZvcm1hdGlvbl91aSI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYmFzZV9pbmZvcm1hdGlvbl9zcnYiOnsicm9sZXMiOlsiYWRtaW4iXX0sImZ1bmRfc3J2Ijp7InJvbGVzIjpbImFkbWluIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIxNTEzNGNlZS0yM2IzLTRjMDYtYjMzMi03YTJkYTU4NmI0YmEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiLYrdis2Kog2LTYqNin2KgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJob2phdCIsImdpdmVuX25hbWUiOiLYrdis2KoiLCJmYW1pbHlfbmFtZSI6Iti02KjYp9ioIn0.WUWcRmC5ZookobFOt_eotMRMu2a5sLekBgFggGHg2PfrGjAhROQUQdyzTQcxR3dyT6ROXkDNJCr_xZP_-LfaXXkRjoFeLS91CyJRWPPu8ddVKgtrjqWp9m0YL2tu2ZVA0E8M3YCv_XmBn-JMpL5Na7bXgkF8C7e-q8J05R54f_Q2r2Gf0qNesHBZ_nMOOQAYCrO1b1DC9MRmFmWT51iTdK7uGZD70NByTRLeCiupHWM4cGlwY-7RaO6kwy3zbyyv_8wMKKLpGKtNnxRca-ULPNsILIyLruqA7s3bA-9QKvZH7DSQbovRsKfgks4VpX9qllykcgeHdsbhH2tg1_VxKA";
	let Authorization = `Bearer ${staticToken}`;
	// let Authorization = `Bearer ${token?.Token}`;
	// const dispatch = useAppDispatch();
	const Navigate = useNavigate();
	let headers = {
		Authorization,
		"Content-Type": "application/json",
	};

	const [loadingApi, setLoadingApi] = useState([]);

	const deleteLoadedApi = ({ url }) => {
		const loadingApiArray = loadingApi.filter(item => item !== url);
		setLoadingApi([...loadingApiArray]);
	};

	const refreshTokenHandler = originalRequest => {
		const tokenData = {
			AccessToken: token?.Token,
			RefreshToken: token?.RefreshToken,
		};

		const tokenQuery = {
			url: "Account/RefreshToken",
			method: "post",
			successFunction: async res => {
				const data = res.data;
				// await dispatch(
				// 	setToken({
				// 		Token: data.Token,
				// 		RefreshToken: data.RefreshToken,
				// 		Expiration: data.Expiration,
				// 	}),
				// );
				let req = {
					method: originalRequest?.method,
					url: originalRequest?.url,
				};

				Authorization = `Bearer ${token?.Token}`;
				headers = {
					Authorization,
					"Content-Type": "application/json",
				};
				req.headers = headers;

				if (originalRequest?.data) req.data = originalRequest?.data;

				await axios(req)
					.then(res => {
						originalReqeyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFc296OFJYR0JwdERoQXE2NUROTjE5UW9NZThfYk5rVXRmcGZTVk1pM1dVIn0
							.eyJleHAiOjE2ODk0NDg0MDIsImlhdCI6MTY4OTQ0NjYwMiwianRpIjoiNjFlMDkwYmMtNmVlMi00Mjk5LTg1YWItM2I5MGI5OWM1Zjg5IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMTIwLjE0OTo5MDgwL2F1dGgvcmVhbG1zL3RhdmFuYSIsImF1ZCI6WyJiYXNlX2luZm9ybWF0aW9uX3VpIiwiZnVuZF9zcnYiLCJhY2NvdW50Il0sInN1YiI6ImFkZGE5N2M1LTlmM2UtNGRhOC04OWQ4LTc2OWU1ZGM1NWI0MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJhc2VfaW5mb3JtYXRpb25fc3J2Iiwic2Vzc2lvbl9zdGF0ZSI6ImQ0NDZkZWViLTMyZGEtNGVhNS1iYWM2LTQwMjU2MTY0NzlmMyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRhdmFuYSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYmFzZV9pbmZvcm1hdGlvbl91aSI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYmFzZV9pbmZvcm1hdGlvbl9zcnYiOnsicm9sZXMiOlsiYWRtaW4iXX0sImZ1bmRfc3J2Ijp7InJvbGVzIjpbImFkbWluIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJkNDQ2ZGVlYi0zMmRhLTRlYTUtYmFjNi00MDI1NjE2NDc5ZjMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiLYrdis2Kog2LTYqNin2KgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJob2phdCIsImdpdmVuX25hbWUiOiLYrdis2KoiLCJmYW1pbHlfbmFtZSI6Iti02KjYp9ioIn0
							.CxjF69 -
							zNjL_y_rt -
							VcFxUqDpd0oB9Ni4MErXPaEQQoQvnFGohBu06s5dqF2otFdhBooKzTrDN0_fXcDBUo4X6McV9tjPLbctGSdOnnUESi_IwFkG4xbBIiGzp02na8feKH2NfDBGFY8jmY_rutpSUZMk2x0WGHWI4xfmiDWqmH2sElc9OpIFoL8yTaPyN -
							pmKyD5fhynzRlvh8z -
							KLH6wUc7Yic_oCaHk8ZD1ff1JgGrx_i4AwERW4BbjkycnDvJwtaBOcpDfgNiaHVyE4eCH4nHlg51HzjFXGhhHrsBduxKtPdQCYTt2_7SOMCtZd8HPgMreuNzM5drzY4isZ9aQuest?.successFunction(
								res,
							);
					})
					.catch(err => {
						if (err?.response?.status === 401) {
							// dispatchEvent(setEndSession(true));
							Navigate("/logout");
						}
					});
			},
			setToken: false,
			data: tokenData,
			refreshToken: true,
		};

		sendRequest(tokenQuery);
	};

	// https://jsonplaceholder.typicode.com/
	// http://192.168.120.149:8085/api/
	const sendRequest = ({
		baseUrl = "http://192.168.120.149:8085/api/",
		url,
		method = "get",
		successFunction,
		sendToken = true,
		data = null,
		refreshToken = false,
	}) => {
		let req = {
			method: method,
			url: baseUrl + url,
		};

		if (sendToken) req.headers = headers;
		if (data) req.data = data;

		setLoadingApi([...loadingApi, url]);

		axios(req)
			.then(res => {
				deleteLoadedApi(url);
				successFunction(res);
			})
			.catch(err => {
				deleteLoadedApi(url);
				if (err?.response?.status === 401 || err?.response?.status === 400) {
					setLoadingApi([]);
					if (!refreshToken && err?.response?.status === 401) {
						const originalRequest = err.config;
						originalRequest.successFunction = successFunction;
						refreshTokenHandler(originalRequest);
					} else if (refreshToken) {
						// dispatchEvent(setEndSession(true));
						Navigate("/logout");
					}
				} else if (err?.response?.status) {
					setNotification(err?.response?.status, err?.response?.message);
				} else if (err.code === "ERR_NETWORK") {
					setNotification("failed", null);
				}
			});
	};
	return { sendRequest, loadingApi };
};

export default useAxios;
