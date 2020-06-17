import { UserBook } from '../models/userbook'
import { UserBookService } from '../services/userBookService'
import { UserBookCreateRequest } from './requests/userBookCreateRequest'

import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import { User } from '../models/user'

@JsonController('/library')
export class UserBookController {
  constructor (
    private userBookService : UserBookService
  ) {}

  @Post()
  public create (@Body() body:UserBookCreateRequest): Promise<UserBook> {
    const userBookConnection = new UserBook()
    userBookConnection.userId = body.userId
    userBookConnection.bookId = body.bookId
    userBookConnection.state = body.state

    return this.userBookService.create(userBookConnection)
  }
  // @Get()
  // public find (): Promise<UserBook[]> {
  // }

  // @Get('/:id')
  // public one (@Param('id') id: string): Promise<UserBook | undefined> {
  //   return this.userBookService.findOne(id)
  // }

  @Put('/:id')
  public update (@Param('id') id: number, @Body() body: UserBook): Promise<UserBook> {
    const userBook = new UserBook()
    userBook.state = body.state
    return this.userBookService.update(id, userBook)
  }
}
