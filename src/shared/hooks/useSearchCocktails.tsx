import { useMutation } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import CocktailContext from "../context/CocktailContext";
import { searchCocktailByName } from "../fetchers/cocktails";

export const useSearchCocktails = () => {
	const { favDrinks, setCocktails } = useContext(CocktailContext);

	const { data: searchResults, mutate } = useMutation(
		["searchCocktailsM"],
		searchCocktailByName
	);

	useEffect(() => {
		if (searchResults) {
			setCocktails(searchResults);
		}
	}, [searchResults, setCocktails]);

	const triggerOnSearch = (term: string) => {
		mutate(term);
	};

	return { favDrinks, triggerOnSearch, searchResults };
};
