import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("<Loading />", () => {
	it("rendered successfully", () => {
		const { container } = render(<Loading />);
		expect(container).toBeInTheDocument();
	});
});
