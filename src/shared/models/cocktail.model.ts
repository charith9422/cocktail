export interface Drink {
	strDrink: string;
	strCategory: string;
	strDrinkThumb: string;
}
export interface Cocktails {
	drinks: Drink[];
}

export interface Params {
	name?: string;
}
