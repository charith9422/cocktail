import axios from "axios";
import { Cocktails } from "../models";

const BASE_URL = process.env.REACT_APP_COCKTAILDB_BASE_URL;

export const fetchRandomCocktails = async () => {
	const response = await axios.get(`${BASE_URL}/random.php`);
	const cocktails: Cocktails = response.data;
	return cocktails;
};

export const searchCocktailByName = async (name: string) => {
	console.log(name);
	const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
	const cocktails: Cocktails = response.data;
	return cocktails;
};
