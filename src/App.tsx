import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import SearchBar from "./shared/components/SearchBar/SearchBar";
import { Button, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { Cocktails, HomeRefs, Params } from "./shared/models";
import { ReloadOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchCocktailByName } from "./shared/fetchers/cocktails";
import { Skeleton } from "antd";
import Loading from "./shared/components/Loading/Loading";
import Error from "./shared/components/Error/Error";

function App() {
	const childRef = useRef<HomeRefs>();
	const navigate = useNavigate();
	//const [cocktailsS, setCocktailsS] = useState<Cocktails>({ drinks: [] });
	//const [searchString, setSearchString] = useState<string>();

	const mutation = useMutation(["searchCocktails"], ({ name }: Params) =>
		searchCocktailByName({ name })
	);

	const onSearch = (v: string) => {
		try {
			if (v) {
				mutation.mutate({ name: v });
			}
		} catch (error) {
			console.log("e", error);
		}
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			console.log("e", e.target.value);
		}
	};

	return (
		<React.Fragment>
			<Container fluid>
				<Row className="top-tool-bar">
					<Col xs={12} lg={{ offset: 4, span: 4 }}>
						<SearchBar
							onSearch={onSearch}
							placeholderText="Search Cocktail"
							onChange={onChange}
						/>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col xs lg="12">
						{mutation.data?.drinks && <Search data={mutation.data} />}
						{mutation.isLoading && <Loading />}
						{!mutation.data?.drinks && mutation.isSuccess && (
							<Error text="No Data Found" />
						)}
						<Routes>
							<Route index element={<Home ref={childRef} />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/*" element={<Home ref={childRef} />} />
						</Routes>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default App;
