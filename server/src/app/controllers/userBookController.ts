import { UserBook } from '../models/userbook'
import { UserBookService } from '../services/userBookService'
import { UserBookCreateRequest } from './requests/userBookCreateRequest'

import { JsonController, Param, Body, Get, Post, Put, Delete, CurrentUser, Authorized } from 'routing-controllers'
import { User } from '../models/user'
import { UserBookUpdateRequest } from './requests/userBookUpdateRequest'
import { UserBookProgressUpdateRequest } from './requests/userBookProgressUpdateRequest'


@JsonController('/library')
export class UserBookController {
  constructor(
    private userBookService: UserBookService
  ) { }

  @Post()
  @Authorized()
  public create(@Body() body: UserBookCreateRequest, @CurrentUser() user?: User): Promise<UserBook> {
    const userBookConnection = new UserBook()
    userBookConnection.userId = body.userId
    userBookConnection.bookId = body.bookId
    userBookConnection.state = body.state
    console.log(body.state)

    return this.userBookService.create(userBookConnection)
  }
  // @Get()
  // public find (): Promise<UserBook[]> {
  // }

  @Get()
  @Authorized()
  public async Get(@CurrentUser() user?: User): Promise<any> {
    const currentUser = user as User
    const library = this.userBookService.getLibrary(currentUser.id)
    return library
  }

  @Put()
  @Authorized()
  public update(@Body() body: UserBookUpdateRequest, @CurrentUser() user?: User): Promise<UserBook> {
    return this.userBookService.update((user as User).id, body.bookId, body.state)
  }

  @Post('/progress')
  @Authorized()
  public updateProgress(@Body() body: UserBookProgressUpdateRequest, @CurrentUser() user?: User): Promise<UserBook> {
    return this.userBookService.updateProgress((user as User).id, body.bookId, body.progress)
  }

  @Delete()
  @Authorized()
  public delete(@Body() body: { bookId: number }, @CurrentUser() user?: User): Promise<any> {
    return this.userBookService.delete((user as User).id, body.bookId)
  }
}
