export interface Drink {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	strDrinkThumb: string;
	isFav?: boolean;
}
export interface Cocktails {
	drinks: Drink[];
}

export interface Params {
	name: string;
}

export enum Type {
	add = "add",
	remove = "remove",
}
export interface OperationalParams {
	drink: Drink;
	type: Type;
}
