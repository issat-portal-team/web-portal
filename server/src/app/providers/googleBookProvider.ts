import { Service } from 'typedi'
import { BookProviderToken } from './utils/bookProviderToken'
import { IBookProvider } from './iBookProvider'
import fetch from 'node-fetch'
import { env } from '../../config'
import { BookSearchDto } from './utils/bookSearchDto'

type RequestParams = {
  [key: string]: string
}

@Service({ id: BookProviderToken, multiple: true })
export class GoogleBookProvider implements IBookProvider {
  constructor (
  ) { }

  private toBookSearchDto (item: any): BookSearchDto {
    return {
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      imageLink: item.volumeInfo.imageLinks?.thumbnail,
      subtitle: item.volumeInfo.subtitle,
      pageCount: item.volumeInfo.pageCount,
      publishedDate: item.volumeInfo.publishedDate
    }
  }

  adapt (data: any): Promise<BookSearchDto> {
    return data.items.map(this.toBookSearchDto)
  }

  async search (query: string) {
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
