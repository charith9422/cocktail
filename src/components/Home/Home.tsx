import React from "react";

import CardWidget from "../../shared/components/CardWidget/CardWidget";
import Spinner from "../../shared/components/Spinner/Spinner";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import { ReloadOutlined } from "@ant-design/icons";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { useRandomCocktails } from "../../shared/hooks/useRandomCocktails";

const Home: React.FC = () => {
	const { t } = useTranslation();
	const { data, isError, isLoading, isFetching, refreshAll } =
		useRandomCocktails();

	if (isError) {
		return <h1>Error occurred!</h1>;
	}

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			{data && (
				<>
					<Row className="justify-content-md-center">
						<Col xs lg={{ offset: 1, span: 11 }}>
							<h5 className="heading">
								{t("randomCocktails")}
								<>
									<span className="reload-btn">
										<Button
											type="primary"
											onClick={refreshAll}
											icon={<ReloadOutlined className="reload-icon" />}
											size="small"
										></Button>
									</span>
								</>
							</h5>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						{data?.drinks.map((d, i) => (
							<React.Fragment key={i}>
								<Col xs lg="2">
									<CardWidget
										title={d.strDrink}
										description={d.strCategory}
										imageUrl={d.strDrinkThumb}
										loading={isFetching}
									/>
								</Col>
							</React.Fragment>
						))}
					</Row>
				</>
			)}
		</>
	);
};

export default Home;
