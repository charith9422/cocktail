import React from "react";
import { Col, Row } from "react-bootstrap";
import CardWidget from "../../shared/components/CardWidget/CardWidget";
import { Cocktails } from "../../shared/models";
import "./Search.scss";

export type SearchProps = {
	data: Cocktails;
};
const Search = ({ data }: SearchProps) => {
	return (
		<>
			<div className="search-wrapper">
				<Row className="justify-content-md-center">
					<Col xs lg="10">
						<h5>Found {data.drinks.length} search results</h5>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					{data?.drinks.map((d, i) => (
						<React.Fragment key={i}>
							<Col xs lg="2" className="widget">
								<CardWidget
									title={d.strDrink}
									description={d.strCategory}
									imageUrl={d.strDrinkThumb}
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
