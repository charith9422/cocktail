import { rest } from 'msw'
import { randomCocktails } from './responses/random'

const base_url = process.env.REACT_APP_COCKTAILDB_BASE_URL;

export const fetchRandomData = rest.get(base_url, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(randomCocktails))
})

export const randomCocktailsErrorResponse = rest.get(base_url, async (req, res, ctx) => {
  return res(ctx.status(404), ctx.json([]))
})
export const handlers = [fetchRandomData, randomCocktailsErrorResponse]