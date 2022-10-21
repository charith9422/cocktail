import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n/config";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const client = new QueryClient();
root.render(
	<QueryClientProvider client={client}>
		<I18nextProvider i18n={i18n}>
			<App />
			<ReactQueryDevtools initialIsOpen />
		</I18nextProvider>
	</QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
