import { render } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("<NavigationBar/>", () => {
	it("rendered with props", () => {
		const { container } = render(
			<NavigationBar navItem={undefined} brandName={"test"}></NavigationBar>
		);
		expect(container).toBeInTheDocument();
	});
});
