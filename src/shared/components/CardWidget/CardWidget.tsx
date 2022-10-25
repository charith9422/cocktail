import { CloseOutlined, LikeFilled, LikeOutlined } from "@ant-design/icons";
import { Button, Card, Skeleton } from "antd";
import React, { MouseEventHandler } from "react";
import "./CardWidget.scss";
const { Meta } = Card;

type CardWidgetProps = {
	title: string;
	description?: string;
	imageUrl: string;
	loading?: boolean;
	isFavorite?: boolean;
	enableFavorites?: boolean;
	enableClose?: boolean;
	onClickAddToFavorites?: MouseEventHandler<HTMLSpanElement>;
	onClickRemoveFromFavorites?: MouseEventHandler<HTMLSpanElement>;
	onClickClose?: MouseEventHandler<HTMLSpanElement>;
};

const CardWidget: React.FC<CardWidgetProps> = ({
	description,
	imageUrl,
	title,
	loading,
	isFavorite,
	enableFavorites,
	enableClose,
	onClickAddToFavorites,
	onClickRemoveFromFavorites,
	onClickClose,
}: CardWidgetProps) => {
	return (
		<>
			<Card
				hoverable
				style={{ width: "auto" }}
				cover={<img alt="example" src={imageUrl} />}
			>
				<Skeleton loading={loading} avatar active>
					{enableFavorites ? (
						<Meta
							title={title}
							description={description}
							avatar={
								isFavorite ? (
									<LikeFilled onClick={onClickRemoveFromFavorites} />
								) : (
									<LikeOutlined onClick={onClickAddToFavorites} />
								)
							}
						/>
					) : (
						<Meta title={title} description={description} />
					)}
					{enableClose && (
						<Button
							type="primary"
							danger
							className="close-btn"
							onClick={onClickClose}
							icon={<CloseOutlined />}
							size="small"
						></Button>
					)}
				</Skeleton>
			</Card>
		</>
	);
};

export default CardWidget;
