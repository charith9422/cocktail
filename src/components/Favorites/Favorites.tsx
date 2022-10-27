import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CardWidget from "../../shared/components/CardWidget/CardWidget";
import Error from "../../shared/components/Error/Error";
import CocktailContext from "../../shared/context/CocktailContext";
import { OperationalParams, Type } from "../../shared/models";

const Favorites = () => {
	const { favDrinks, setFavDrinks } = useContext(CocktailContext);
	const { t } = useTranslation();

	const removeFromFavorites = ({ drink }: OperationalParams) => {
		setFavDrinks(favDrinks.filter((d) => d.idDrink !== drink.idDrink));
	};

	return (
		<>
			<div className="search-wrapper">
				<Row className="justify-content-md-center">
					<Col xs lg="10">
						<h5>{t("myFavorites")}</h5>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					{favDrinks?.map((d, i) => (
						<React.Fragment key={i}>
							<Col xs lg="2" className="widget">
								<CardWidget
									index={i}
									title={d.strDrink}
									imageUrl={d.strDrinkThumb}
									enableClose
									onClickClose={() =>
										removeFromFavorites({ drink: d, type: Type.remove })
									}
								/>
							</Col>
						</React.Fragment>
					))}
					{favDrinks?.length === 0 && <Error text={t("noFavorites")}></Error>}
				</Row>
			</div>
		</>
	);
};

export default Favorites;
