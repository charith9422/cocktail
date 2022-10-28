import axios from "axios";
import { Cocktails } from "../models";

const BASE_URL = process.env.REACT_APP_COCKTAILDB_BASE_URL;

export const fetchRandomCocktails = async () => {
	const response = await axios.get(`${BASE_URL}/random.php`).catch((e) => {
		throw new Error(`Error occurred!${e}`);
	});
	const cocktails: Cocktails = response.data;
	return cocktails;
};

export const searchCocktailByName = async (name: string) => {
	const response = await axios
		.get(`${BASE_URL}/search.php?s=${name}`)
		.catch((e) => {
			throw new Error(`Error occurred!${e}`);
		});
	const cocktails: Cocktails = response.data;
	return cocktails;
};
