import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate,
}));
test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);

	mockedAxios.get.mockResolvedValue({
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
	});
	expect(linkElement).toBeInTheDocument();
});
