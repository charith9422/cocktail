import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchRandomCocktails } from "../../shared/fetchers/cocktails";
import { Cocktails } from "../../shared/models";
import CardWidget from "../../shared/components/CardWidget/CardWidget";
import Spinner from "../../shared/components/Spinner/Spinner";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import { ReloadOutlined } from "@ant-design/icons";
import "./Home.scss";
import { useTranslation } from "react-i18next";

const Home: React.FC<any> = () => {
	const {
		data: d1,
		isError: e1,
		isLoading: l1,
		refetch: r1,
		isFetching: f1,
	} = useQuery(["cocktails1"], fetchRandomCocktails, {
		staleTime: 60000,
		enabled: true,
	});
	const {
		data: d2,
		isError: e2,
		refetch: r2,
		isLoading: l2,
		isFetching: f2,
	} = useQuery(["cocktails2"], fetchRandomCocktails, {
		staleTime: 60000,
		enabled: true,
	});
	const {
		data: d3,
		isError: e3,
		refetch: r3,
		isLoading: l3,
		isFetching: f3,
	} = useQuery(["cocktails3"], fetchRandomCocktails, {
		staleTime: 60000,
		enabled: true,
	});
	const {
		data: d4,
		isError: e4,
		refetch: r4,
		isLoading: l4,
		isFetching: f4,
	} = useQuery(["cocktails4"], fetchRandomCocktails, {
		staleTime: 60000,
		enabled: true,
	});
	const {
		data: d5,
		isError: e5,
		refetch: r5,
		isLoading: l5,
		isFetching: f5,
	} = useQuery(["cocktails5"], fetchRandomCocktails, {
		staleTime: 60000,
		enabled: true,
	});

	const [data, setData] = useState<Cocktails>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { t } = useTranslation();

	useEffect(() => {
		if (d1 && d2 && d3 && d4 && d5) {
			let randomDrinks = [
				...d1.drinks,
				...d2.drinks,
				...d3.drinks,
				...d4.drinks,
				...d5.drinks,
			];
			setData({ drinks: randomDrinks });
		}
		if (f1 || f2 || f3 || f4 || f5) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [d1, d2, d3, d4, d5, l1, l2, l3, l4, l5, f1, f2, f3, f4, f5]);

	const refreshAll = async () => {
		await r1();
		await r2();
		await r3();
		await r4();
		await r5();
	};

	if (e1 && e2 && e3 && e4 && e5) {
		return <h1>Error occurred!</h1>;
	}

	if (l1 || l2 || l3 || l4 || l5) {
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
										<ReloadOutlined
											className="reload-icon"
											onClick={refreshAll}
										/>
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
										loading={isLoading}
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
