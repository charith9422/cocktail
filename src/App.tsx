import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import SearchBar from "./shared/components/SearchBar/SearchBar";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import NavigationBar from "./shared/components/NavigationBar/NavigationBar";
import Favourite from "./shared/components/Favourite/Favourite";
import { useTranslation } from "react-i18next";
import { useSearchCocktails } from "./helpers/hooks/useSearchCocktails";

function App() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { favDrinks, triggerOnSearch } = useSearchCocktails();

	const onSearch = (value: string) => {
		if (value) {
			triggerOnSearch(value);
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
							<Route path="/search-list" element={<Search />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/*" element={<Home />} />
						</Routes>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default App;
