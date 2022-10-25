import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import SearchBar from "./shared/components/SearchBar/SearchBar";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { Params } from "./shared/models";
import { useMutation } from "@tanstack/react-query";
import { searchCocktailByName } from "./shared/fetchers/cocktails";
import { CocktailContext } from "./shared/context/CocktailContext";
import NavigationBar from "./shared/components/NavigationBar/NavigationBar";
import Favourite from "./shared/components/Favourite/Favourite";
import { useTranslation } from "react-i18next";

function App() {
	const navigate = useNavigate();
	const { favDrinks, setCocktails } = useContext(CocktailContext);
	const { t } = useTranslation();

	const { data: searchResults, mutate } = useMutation(
		["searchCocktails"],
		({ name }: Params) => searchCocktailByName({ name })
	);

	useEffect(() => {
		if (searchResults) {
			setCocktails(searchResults);
		}
	}, [searchResults, setCocktails]);

	const onSearch = (v: string) => {
		if (v) {
			mutate({ name: v });
			navigate("/search-list");
		}
	};

	return (
		<React.Fragment>
			<NavigationBar
				brandName={t("brandName")}
				navItem={
					<Favourite
						title={t("myFavorites")}
						count={favDrinks.length}
						onClick={() => navigate("/favorites")}
					></Favourite>
				}
				onBrandClick={() => navigate("/")}
			></NavigationBar>
			<Container fluid>
				<Row className="top-tool-bar">
					<Col xs={12} lg={{ offset: 4, span: 4 }}>
						<SearchBar
							onSearch={onSearch}
							placeholderText={t("searchPlaceholder")}
						/>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col xs lg="12">
						<Routes>
							<Route index element={<Home />} />
							{searchResults?.drinks && (
								<Route path="/search-list" element={<Search />} />
							)}
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/*" element={<Home />} />
						</Routes>
						{/* {mutation.data?.drinks && <Search />}
						{mutation.isLoading && <Loading />}
						{!mutation.data?.drinks && mutation.isSuccess && (
							<Error text="No Data Found" />
						)} */}
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default App;
