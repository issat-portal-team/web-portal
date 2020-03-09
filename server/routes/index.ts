/* eslint-disable no-unused-vars */
import { Application } from 'express'
import loginController from './controllers/loginController'

export const register = (app: Application) => {
  // define a secure route handler for the login page that redirects to /guitars
  app.post('/login', (req, res) => loginController(req, res))
}
