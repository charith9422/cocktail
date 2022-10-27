import React from "react";
import {
	findByText,
	render,
	renderHook,
	screen,
	waitFor,
} from "@testing-library/react";
import App from "./App";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { CocktailContextProvider } from "./shared/context/CocktailContext";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

/* jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate,
})); */

const queryClient = new QueryClient();
/* const wrapper = ({ children }: any) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
export function useCustomHook() {
	return useQuery(["customHook"], () => "Hello");
} */
describe("App", () => {
	beforeAll(() => {});
	test("renders learn react link", () => {
		//renderHook(() => useCustomHook(), { wrapper });
		render(
			<QueryClientProvider client={queryClient}>
				<CocktailContextProvider>
					<Router>
						<App />
					</Router>
				</CocktailContextProvider>
			</QueryClientProvider>
		);
		const linkElement = screen.getByText(/brandName/i);

		/* mockedAxios.get.mockResolvedValue({
			data: [
				{
					id: 1,
					name: "Joe Doe",
				},
				{
					id: 2,
					name: "Jane Doe",
				},
			],
		}); */
		expect(linkElement).toBeInTheDocument();
	});
	test("df", async () => {
		const { getAllByText } = render(
			<QueryClientProvider client={queryClient}>
				<CocktailContextProvider>
					<Router>
						<App />
					</Router>
				</CocktailContextProvider>
			</QueryClientProvider>
		);
		// eslint-disable-next-line testing-library/prefer-screen-queries
		const i = getAllByText("Shot-gun");
		await waitFor(() => {
			screen.getAllByText("Shot-gun");
		});
		expect(i).toBeTruthy();
	});
});
