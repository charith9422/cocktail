import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CardWidget from "../../shared/components/CardWidget/CardWidget";
import CocktailContext from "../../shared/context/CocktailContext";
import { Cocktails, OperationalParams, Type } from "../../shared/models";
import "./Search.scss";

export type SearchProps = {
	data: Cocktails;
};

const Search = () => {
	const { cocktails, setCocktails, favDrinks, setFavDrinks } =
		useContext(CocktailContext);
	const { t } = useTranslation();

	const onFavClick = ({ drink, type }: OperationalParams) => {
		const results = cocktails.drinks.map((data, i) => {
			if (data.idDrink === drink.idDrink) {
				return { ...data, isFav: !drink.isFav };
			} else {
				return data;
			}
		});
		setCocktails({ drinks: results });
		if (type === Type.add) {
			setFavDrinks([...favDrinks, drink]);
		} else {
			setFavDrinks(favDrinks.filter((d) => d.idDrink !== drink.idDrink));
		}
	};
	return (
		<>
			<div className="search-wrapper">
				<Row className="justify-content-md-center">
					<Col xs lg="10">
						<h5>
							{t("resultsFound")}:{cocktails?.drinks?.length}
						</h5>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					{cocktails?.drinks?.map((d, i) => (
						<React.Fragment key={i}>
							<Col xs lg="2" className="widget">
								<CardWidget
									title={d.strDrink}
									imageUrl={d.strDrinkThumb}
									enableFavorites
									onClickAddToFavorites={() =>
										onFavClick({
											drink: d,
											type: Type.add,
										})
									}
									onClickRemoveFromFavorites={() =>
										onFavClick({
											drink: d,
											type: Type.remove,
										})
									}
									isFavorite={d.isFav}
								/>
							</Col>
						</React.Fragment>
					))}
				</Row>
			</div>
		</>
	);
};

export default Search;
