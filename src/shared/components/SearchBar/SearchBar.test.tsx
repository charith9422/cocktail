import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("<NavigationBar/>", () => {
	it("rendered with props", () => {
		const { container } = render(
			<SearchBar
				onSearch={() => jest.fn()}
				placeholderText={"test"}
			></SearchBar>
		);
		expect(container).toBeInTheDocument();
	});
});
