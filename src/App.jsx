import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import RenderFormExample from "./Examples/RenderFormExample";
import UseAxiosExample from "./Examples/UseAxiosExample";
import ToastContext from "./Context/ToastContext";
import { Toast } from "primereact/toast";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./Features/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import SetReduxValueExample from "./Examples/SetReduxValueExample";
import { routeItems } from "./Configuration/Routes.config";
import RenderMenu from "./Components/RenderMenu/RenderMenu";
// import BaseInfo from "./Pages/BaseInfo/BaseInfo";
let persistor = persistStore(store);

const App = () => {
	const toast = useRef(null);
	const [toastObject, setToastObject] = useState(null);
	const value = useMemo(() => ({ toastObject, setToastObject }), [toastObject]);

	useEffect(() => {
		if (toastObject) {
			toast.current.show(toastObject);
		}
	}, [toastObject]);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ToastContext.Provider value={value}>
					<BrowserRouter>
						<Toast ref={toast} />
						<div className="dashboard">
							<div className="menu-bg">
								<RenderMenu />
							</div>
							<div className="content-bg">
								<Routes>
									{routeItems.map(item => (
										<Route
											key={item.key}
											path={item.path}
											element={item.element}
										/>
									))}
								</Routes>
							</div>
						</div>
						{/* <SetReduxValueExample />
							<RenderFormExample />
							<UseAxiosExample /> */}
						{/* <BaseInfo /> */}
					</BrowserRouter>
				</ToastContext.Provider>
			</PersistGate>
		</Provider>
	);
};
ReactDOM.render(<App />, document.getElementById("app"));
