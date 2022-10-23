import { Skeleton } from "antd";
import { Row } from "react-bootstrap";

const Loading: React.FC = () => {
	return (
		<Row lg={12}>
			<Skeleton paragraph={{ rows: 4 }} />;
		</Row>
	);
};
export default Loading;
