import routes from './routes'
import { Express } from 'express'
import expresso from '@expresso/expresso'

export const app = expresso(async (app: Express, config: any) => {
  // Initialize all your connections, services, repositories and other stuff here
  // Example:
  // const connection = await mongodb.createConnection(config.database.mongodb)
  // const userRepository = new UserRepository(connection)
  // const userService = new UserService(userRepository)

  // Put your routes below
  // Example: app.get('/users', routes.user.get.factory(userService))
})
