import axios from "axios";
import { Cocktails, Params } from "../models";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchRandomCocktails = async () => {
	const response = await axios.get(`${BASE_URL}/random.php`);
	const cocktails: Cocktails = response.data;
	return cocktails;
};

export const searchCocktailByName = async ({ name }: Params) => {
	const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
	const cocktails: Cocktails = response.data;
	return cocktails;
};
