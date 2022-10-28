import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n/config";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { CocktailContextProvider } from "./shared/context/CocktailContext";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { setupWorker } from "msw";
import { fetchRandomData } from "./mocks/handlers";
import { DEVELOPMENT, PRODUCTION } from "./shared/constants";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
if (
	process.env.NODE_ENV === DEVELOPMENT ||
	process.env.NODE_ENV === PRODUCTION
) {
	const msw = setupWorker(...[fetchRandomData]);
	msw.start();
}
const client = new QueryClient();
root.render(
	<BrowserRouter>
		{/* Included higher order components for react-router,react query,internationalization,error boundary and context api */}
		<QueryClientProvider client={client}>
			<I18nextProvider i18n={i18n}>
				<ErrorBoundary message="Error Occurred! Seems like there is and issue with relevant data sources">
					<CocktailContextProvider>
						<App />
					</CocktailContextProvider>
				</ErrorBoundary>
				<ReactQueryDevtools initialIsOpen />
			</I18nextProvider>
		</QueryClientProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
