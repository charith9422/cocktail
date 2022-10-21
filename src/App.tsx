import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/search-list" element={<Search />} />
					<Route path="/*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
