import { User } from '../models/user'
import { UserService } from '../services/userService'
import { UserCreateRequest } from './requests/userCreateRequest'

import { JsonController, Body, Post, UnauthorizedError, Get, Authorized, CurrentUser } from 'routing-controllers'
import { UserLoginRequest } from './requests/userLoginRequest'
import { UserLoginResponse } from './responses/userLoginResponse'
import { JwtAuthService } from '../auth/jwtAuthService'

@JsonController('/users')
export class UserController {
  constructor (
        private userService: UserService,
        private authService: JwtAuthService
  ) { }

  @Post()
  public async create (@Body() body: UserCreateRequest): Promise<UserLoginResponse> {
    let user = new User()
    user.email = body.email
    user.username = body.username
    user.password = body.password

    user = await this.userService.create(user)
    return {
      id: user.id,
      token: this.authService.generateJwtToken(user),
      username: user.username,
      email: user.email
    }
  }

  @Post('/login')
  public async login (@Body() body: UserLoginRequest): Promise<UserLoginResponse> {
    let user = await this.userService.findByUsername(body.username)
    if (!user) {
      throw new UnauthorizedError('Auth failure')
    }
    const passwordCheck = await User.comparePassword(user, body.password)
    if (passwordCheck === true) {
      user = user as User
      return {
        id: user.id,
        token: this.authService.generateJwtToken(user),
        username: user.username,
        email: user.email
      }
    } else {
      throw new UnauthorizedError('Auth failure')
    }
  }

  @Get('/auth')
  @Authorized()
  public testAuth (@CurrentUser() user?: User): Promise<User> {
    return new Promise((resolve, reject) => { resolve(user) })
  }
}
