import { render } from "@testing-library/react";
import Favourite from "./Favourite";

describe("<Favourite/>", () => {
	it("rendered with props", () => {
		const { container } = render(
			<Favourite count={1} onClick={() => jest.fn()} title="test"></Favourite>
		);
		expect(container).toBeInTheDocument();
	});
});
