import { rest } from 'msw'
import { randomCocktails } from './responses/random'

const base_url = './responses/random.js';

export const fetchRandomData = rest.get(base_url, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(randomCocktails))
})

export const randomCocktailsErrorResponse = rest.get(base_url, async (req, res, ctx) => {
  return res(ctx.status(404), ctx.json('Error'))
})

export const searchCocktails = rest.get(base_url, async (req, res, ctx) => {
  const searchTerm = req.url.searchParams.get('s')
  return res(ctx.status(200), ctx.json({ searchTerm }))
})
export const handlers = [fetchRandomData, randomCocktailsErrorResponse, searchCocktails]