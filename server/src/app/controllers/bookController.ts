import { JsonController, Post, Body, Put, Param, Get, QueryParams } from 'routing-controllers'
import { BookService } from '../services/bookService'
import { BookCreateRequest } from './requests/bookCreateRequest'
import { Book } from '../models/book'
import { SearchBookRequest } from './requests/searchBookRequest'

@JsonController('/books')
export class BookController {
  constructor (
    private bookService:BookService
  ) { }

  @Get('/search')
  public async search (@QueryParams() query: SearchBookRequest): Promise<any> {
    const data = this.bookService.search(query.name)
    return data
  }

  @Get()
  public find (): Promise<Book[]> {
    return this.bookService.findAll()
  }

  @Post()
  public create (@Body() body:BookCreateRequest): Promise<Book> {
    const book = new Book()
    book.id = body.id
    book.title = body.title
    book.subtitle = body.subtitle
    book.description = body.description
    book.imageLink = body.imageLink
    book.pageCount = body.pageCount
    book.author = body.author
    book.publishedDate = body.publishedDate

    return this.bookService.create(book)
  }
}
