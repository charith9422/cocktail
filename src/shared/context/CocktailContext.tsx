import { createContext, ReactNode, useState } from "react";
import { Cocktails, Drink } from "../models";

type CocktailProviderProps = {
	children: ReactNode;
};
export interface ICocktails {
	favDrinks: Drink[];
	setFavDrinks(v: Drink[]): void;
	cocktails: Cocktails;
	setCocktails(d: Cocktails): void;
}
export const CocktailContext = createContext<ICocktails>(
	null as unknown as ICocktails
);

export const CocktailContextProvider = ({
	children,
}: CocktailProviderProps) => {
	const [favDrinks, setFavDrinks] = useState<Drink[]>([]);
	const [cocktails, setCocktails] = useState<Cocktails>({ drinks: [] });

	const value = {
		favDrinks,
		setFavDrinks,
		cocktails,
		setCocktails,
	} as ICocktails;

	return (
		<CocktailContext.Provider value={value}>
			{children}
		</CocktailContext.Provider>
	);
};

export default CocktailContext;
