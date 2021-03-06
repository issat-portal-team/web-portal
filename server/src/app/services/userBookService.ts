import { Service } from 'typedi'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { UserBook } from '../models/userbook'
import { Book } from '../models/book'
import { UserBookRepository } from '../repositories/userBookRepository'

@Service()
export class UserBookService {
  constructor(
    @OrmRepository() private userBookRepository: UserBookRepository
  ) { }

  public async create(userBook: UserBook): Promise<UserBook> {
    const newUserBook = await this.userBookRepository.save(userBook)
    return newUserBook
  }

  public find(): Promise<UserBook[] | undefined> {
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

  public getLibrary(userId: string): Promise<UserBook[] | undefined> {
    return this.userBookRepository.find({ where: { userId }, relations: ['book'] })
  }

  public async findOne(userId: string, bookId: number): Promise<UserBook | undefined> {
    return this.userBookRepository.findOne({ userId, bookId })
  }

  public async delete(userId: string, bookId: number): Promise<any | undefined> {
    const userBook = (await this.findOne(userId, bookId)) as UserBook
    return await this.userBookRepository.delete(userBook)
  }

  public update(userId: string, bookId: number, state: number): Promise<UserBook> {
    const userBook = new UserBook()
    // TODO: Check that state is in range

    userBook.state = state
    userBook.userId = userId
    userBook.bookId = bookId
    return this.userBookRepository.save(userBook)
  }

  public async updateProgress(userId: string, bookId: number, progress: number): Promise<UserBook> {
    const userBook = (await this.findOne(userId, bookId)) as UserBook
    userBook.progress = progress
    return this.userBookRepository.save(userBook)
  }
}
