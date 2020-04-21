import { Service } from 'typedi'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { UserBook } from '../models/userbook'
import { Book } from '../models/book'
import { UserBookRepository } from '../repositories/userBookRepository'
import { User } from '../models/user'

@Service()
export class UserBookService {
  constructor (
        @OrmRepository() private userBookRepository: UserBookRepository
  ) { }

  public async create (userBook: UserBook): Promise<UserBook> {
    const newUserBook = await this.userBookRepository.save(userBook)
    return newUserBook
  }

  public find (): Promise<UserBook [] | undefined> {
    return this.userBookRepository.find({
      join: {
        alias: 'ub',
        leftJoinAndSelect: {
          userId: 'ub.userId',
          bookId: 'ub.bookId',
          state: 'ub.state'
        }
      }
    })
  }

  public findOne (userId: string, bookId: number): Promise< UserBook | undefined> {
    return this.userBookRepository.findOne({ userId, bookId })
  }

  public update (state: number, userBook: UserBook): Promise<UserBook> {
    userBook.state = state
    return this.userBookRepository.save(userBook)
  }
}
