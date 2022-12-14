import { useMutation } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import CocktailContext from "../../shared/context/CocktailContext";
import { searchCocktailByName } from "../../shared/fetchers/cocktails";

export const useSearchCocktails = () => {
	const { favDrinks, setCocktails } = useContext(CocktailContext);

	const { data: searchResults, mutate } = useMutation(
		["searchCocktails"],
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
