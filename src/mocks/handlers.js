import { rest } from 'msw'
import { randomCocktails } from './responses/random'


export const handlers = [
  rest.get(`${process.env.REACT_APP_COCKTAILDB_BASE_URL}/random.php`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(randomCocktails)
    )
  }),
  rest.get(`${process.env.REACT_APP_COCKTAILDB_BASE_URL}/random.php`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  })
]