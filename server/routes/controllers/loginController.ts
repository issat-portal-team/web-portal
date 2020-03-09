// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

export class LoginController {
  public async logIn (req:Request, res:Response): Promise<void> {
    // Check DB
    res.send({
      msg: 'logged in'
    })
  }
}
