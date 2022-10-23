import { Card, Skeleton } from "antd";
import React from "react";
const { Meta } = Card;

type CardWidgetProps = {
	title: string;
	description: string;
	imageUrl: string;
	loading?: boolean;
};

const CardWidget: React.FC<CardWidgetProps> = ({
	description,
	imageUrl,
	title,
	loading,
}: CardWidgetProps) => {
	return (
		<>
			<Card
				hoverable
				style={{ width: "auto" }}
				cover={<img alt="example" src={imageUrl} />}
			>
				<Skeleton loading={loading} avatar active>
					<Meta title={title} description={description} />
				</Skeleton>
			</Card>
		</>
	);
};

export default CardWidget;
