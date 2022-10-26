import { Col, Row } from "react-bootstrap";

type ErrorProps = {
	text: string;
};
const Error: React.FC<ErrorProps> = ({ text }) => {
	return (
		<>
			<Row className="justify-content-md-center">
				<Col xs lg="2">
					<h6>{text}</h6>
				</Col>
			</Row>
		</>
	);
};

export default Error;
