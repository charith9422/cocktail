import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CocktailContextProvider } from "../../shared/context/CocktailContext";
import Search from "./Search";

const queryClient = new QueryClient();
const wrapper = () => {
	render(
		<QueryClientProvider client={queryClient}>
			<CocktailContextProvider>
				<Router>
					<Search />
				</Router>
			</CocktailContextProvider>
		</QueryClientProvider>
	);
};

describe("test on Search component", () => {
	afterEach(cleanup);
	it("<Search/> renders initially", () => {
		wrapper();
		const linkElement = screen.getByText(/resultsFound/i);
		expect(linkElement).toBeInTheDocument();
	});
});
