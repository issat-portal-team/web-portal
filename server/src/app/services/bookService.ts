import { Service } from 'typedi'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { Book } from '../models/book'
import { BookRepository } from '../repositories/bookRepository'

@Service()
export class BookService {
  constructor (
        @OrmRepository() private bookRepository: BookRepository
  ) { }

  public findByBooktitle (booktitle: string) : Promise<Book | undefined> {
    return this.bookRepository.findOne({ title: booktitle })
  }

  public findAll (): Promise<Book []> {
    return this.bookRepository.find()
  }

  public findOne (id: number): Promise<Book | undefined> {
    return this.bookRepository.findOne({ id })
  }

  public async create (book: Book): Promise<Book> {
    const newBook = await this.bookRepository.save(book)
    return newBook
  }

  public update (id: number, book: Book): Promise<Book> {
    book.id = id
    return this.bookRepository.save(book)
  }

  public async delete (bookId: number) {
    await this.bookRepository.delete(bookId)
  }
}
