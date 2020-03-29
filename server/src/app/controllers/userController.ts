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
  public create (@Body() body: UserCreateRequest): Promise<User> {
    const user = new User()
    user.email = body.email
    user.username = body.username
    user.password = body.password

    return this.userService.create(user)
  }

  @Post('/login')
  public async login (@Body() body: UserLoginRequest): Promise<UserLoginResponse> {
    const user = await this.userService.findByUsername(body.username)
    if (!user) {
      throw new UnauthorizedError('Auth failure')
    }
    const passwordCheck = await User.comparePassword(user, body.password)
    if (passwordCheck === true) {
      return {
        id: (user as User).id,
        token: this.authService.generateJwtToken(user)
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
