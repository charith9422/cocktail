import { render } from "@testing-library/react";
import CardWidget from "./CardWidget";

describe("<CardWidget/>", () => {
	it("rendered with props", () => {
		const { container } = render(
			<CardWidget title={"test"} imageUrl={"test"} index={0}></CardWidget>
		);
		expect(container).toBeInTheDocument();
	});

	it("rendered with additional props", () => {
		const { container } = render(
			<CardWidget
				title={"test"}
				imageUrl={"test"}
				index={1}
				description={"abc"}
				loading
				isFavorite
			></CardWidget>
		);
		expect(container).toBeInTheDocument();
	});
});
