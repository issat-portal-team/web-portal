import { JsonController, Post, Body, Put, Param, Get } from 'routing-controllers'
import { BookService } from '../services/bookService'
import { BookCreateRequest } from './requests/bookCreateRequest'
import { Book } from '../models/book'

@JsonController('/books')
export class BookController {
  constructor (
    private bookService : BookService
  ) { }

  @Get()
  public find (): Promise<Book[]> {
    return this.bookService.findAll()
  }

  @Get('/:id')
  public oneBook (@Param('id') id: number): Promise<Book | undefined> {
    return this.bookService.findOne(id)
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

 @Put('/:id')
  public update (@Param('id') id: number, @Body() body: Book): Promise<Book> {
    const book = new Book()
    book.publishedDate = body.publishedDate
    return this.bookService.update(id, book)
  }
}
