import { JsonController, Get, QueryParams } from 'routing-controllers'
import { BookService } from '../services/bookService'
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
}
