import { Service } from 'typedi'
import { BookProviderToken } from './utils/bookProviderToken'
import { IBookProvider } from './iBookProvider'
import fetch from 'node-fetch'
import * as isbnCommands from 'simple-isbn'
import { env } from '../../config'
import { BookSearchDto } from './dtos/bookSearchDto'
import { RequestParams } from './utils/requestParams'
import { BookCreateDto } from './dtos/bookCreateDto'

@Service({ id: BookProviderToken, multiple: true })
export class GoogleBookProvider implements IBookProvider {
  constructor(
  ) { }

  adaptGet(item: any): BookCreateDto {
    let isbn13 = item.volumeInfo.industryIdentifiers.find((e: any) => e.type === 'ISBN_13')
    let isbn10 = item.volumeInfo.industryIdentifiers.find((e: any) => e.type === 'ISBN_10')
    let isbn = ''
    if (isbn13) {
      isbn = isbn13.identifier
    } else if (isbn10) {
      isbn = isbnCommands.isbn.calculateIsbn13Code(isbn10.identifier)
    } else {
      isbn = item.volumeInfo.industryIdentifiers.find((e: any) => e.type === 'OTHER')['identifier']
    }
    console.log(isbn)
    return {
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      imageLink: item.volumeInfo.imageLinks?.thumbnail,
      subtitle: item.volumeInfo.subtitle,
      pageCount: item.volumeInfo.pageCount,
      publishedDate: item.volumeInfo.publishedDate,
      id: item.id,
      provider: GoogleBookProvider.ProviderName,
      isbn: isbn,
      providerName: this.getProviderName()
    }
  }

  async getBookById(id: string): Promise<any> {
    var url = new URL((env.providers.google.endPoint as string) + '/' + id)
    const res = await fetch(url)
    return res.json()
  }

  getProviderName(): string {
    return GoogleBookProvider.ProviderName
  }

  static ProviderName: string = 'Google'

  private toBookSearchDto(item: any): BookSearchDto {
    return {
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      imageLink: item.volumeInfo.imageLinks?.thumbnail,
      subtitle: item.volumeInfo.subtitle,
      pageCount: item.volumeInfo.pageCount,
      publishedDate: item.volumeInfo.publishedDate,
      id: item.id,
      provider: GoogleBookProvider.ProviderName,
      isbn: ''
    }
  }

  adaptSearch(data: any): Promise<BookSearchDto> {
    return data.items.map(this.toBookSearchDto)
  }

  async search(query: string) {
    var url = new URL(env.providers.google.endPoint as string)
    const params: RequestParams = {
      key: env.providers.google.apiKey as string,
      q: query
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const res = await fetch(url)
    return res.json()
  }
}
