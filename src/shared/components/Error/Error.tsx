import { Col, Row } from "react-bootstrap";

type ErrorProps = {
	text: string;
};
const Error: React.FC<ErrorProps> = ({ text }) => {
	return (
		<>
			<Row>
				<Col lg={{ offset: 1 }}>
					<h6>{text}</h6>
				</Col>
			</Row>
		</>
	);
};

export default Error;
