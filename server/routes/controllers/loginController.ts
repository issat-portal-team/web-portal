// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

export class LoginController {
  public async logIn (req:Request, res:Response): Promise<void> {
    const email = req.body.email
    const password = req.body.password
    console.log('request arrived')
    res.send({
      msg: 'email : ' + email + ' password : ' + password
    })
    console.log('request responded')
  }
}
