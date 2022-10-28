import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Favorites from "./Favorites";
import { CocktailContextProvider } from "../../shared/context/CocktailContext";

const queryClient = new QueryClient();
const wrapper = () => {
	render(
		<QueryClientProvider client={queryClient}>
			<CocktailContextProvider>
				<Router>
					<Favorites />
				</Router>
			</CocktailContextProvider>
		</QueryClientProvider>
	);
};

describe("test on Favorites component", () => {
	afterEach(cleanup);
	it("<Favorites/> renders initially", () => {
		wrapper();
		const linkElement = screen.getByText(/myFavorites/i);
		expect(linkElement).toBeInTheDocument();
	});
});
