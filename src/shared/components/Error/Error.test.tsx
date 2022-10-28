import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("<Error/>", () => {
	it("rendered with props", () => {
		render(<Error text="hd"></Error>);
		const linkElement = screen.getByText(/hd/i);
		expect(linkElement).toBeInTheDocument();
	});
});
