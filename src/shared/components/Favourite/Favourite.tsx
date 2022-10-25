import { MouseEventHandler } from "react";
import { Badge, Button } from "react-bootstrap";
import "./Favourite.scss";

type FavoriteProps = {
	count: number;
	title: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};
const Favourite: React.FC<FavoriteProps> = ({ title, count, onClick }) => {
	return (
		<>
			<Button onClick={onClick}>
				{title}
				<Badge className="badge">{count}</Badge>
			</Button>
		</>
	);
};

export default Favourite;
