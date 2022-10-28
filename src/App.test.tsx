import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CocktailContextProvider } from "./shared/context/CocktailContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { server } from "../src/mocks/server";
import {
	fetchRandomData,
	randomCocktailsErrorResponse,
	searchCocktails,
} from "./mocks/handlers";
import SearchBar from "./shared/components/SearchBar/SearchBar";

const queryClient = new QueryClient();
const wrapper = () => {
	render(
		<QueryClientProvider client={queryClient}>
			<CocktailContextProvider>
				<Router>
					<App />
				</Router>
			</CocktailContextProvider>
		</QueryClientProvider>
	);
};

describe("test on App component", () => {
	afterEach(cleanup);
	it("<App/> renders initially", () => {
		wrapper();
		const linkElement = screen.getByText(/brandName/i);
		expect(linkElement).toBeInTheDocument();
	});
	it("render with Home component for 200 response random cocktail api", async () => {
		server.use(fetchRandomData);
		wrapper();
		expect(await screen.findByAltText(/alt1/)).toBeInTheDocument();
	});
	it("error for 404 response random cocktail api", async () => {
		server.use(randomCocktailsErrorResponse);
		wrapper();
		await expect(Promise.reject(new Error("404"))).rejects.toThrow("404");
	});
});
