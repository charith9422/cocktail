import { MouseEventHandler, ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.scss";

type NavbarProps = {
	navItem: ReactNode;
	brandName: string;
	onBrandClick?: MouseEventHandler<HTMLButtonElement>;
};
const NavigationBar: React.FC<NavbarProps> = ({
	brandName,
	navItem,
	onBrandClick,
}) => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="nav-wrapper"
		>
			<Container>
				<Navbar.Brand className="nav-brand" onClick={onBrandClick}>
					{brandName}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<Nav.Link>{navItem}</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
