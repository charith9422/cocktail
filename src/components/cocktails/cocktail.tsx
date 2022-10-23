import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
	fetchRandomCocktails,
	searchCocktailByName,
} from "../../shared/fetchers/cocktails";
import { Drink, Params } from "../../shared/models";

const Cocktail: React.FunctionComponent = () => {
	const { data, isError, isLoading, refetch } = useQuery(
		["cocktails"],
		fetchRandomCocktails,
		{ staleTime: 60000 }
	);

	const { refetch: getSearchdata } = useQuery(
		["todos", "margarita"],
		() => searchCocktailByName({ name: "margarita" } as Params),
		{ enabled: false }
	);
	const [cocktails, setCocktails] = useState<Drink[]>([]);

	const onClick = () => {
		refetch();
	};

	if (isError) {
		return <h1>Error occurred!</h1>;
	}

	if (isLoading) {
		return <h2>Loading...</h2>;
	}
	return (
		<>
			<h5>{data && data?.drinks[0].strDrink}</h5>

			<button className="btn btn-primary" onClick={onClick}>
				Refresh
			</button>
			<button className="btn btn-primary" onClick={() => getSearchdata()}>
				Magarita
			</button>
		</>
	);
};

export default Cocktail;
