/* eslint-disable no-unused-vars */
import { Router } from 'express'
import { LoginController } from './controllers/loginController'

export class LoginRoute {
  public router:Router
  public loginController : LoginController = new LoginController()

  constructor () {
    this.router = Router()
    this.routes()
  }

  routes () {
    this.router.post('/login', this.loginController.logIn)
  }
}
