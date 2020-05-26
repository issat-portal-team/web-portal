import { BookProviderToken } from './utils/bookProviderToken'
import { IBookProvider } from './iBookProvider'
import { env } from '../../config'
import { BookSearchDto } from './utils/bookSearchDto'
import { RequestParams } from './utils/requestParams'

import xml2js from 'xml2js'
import fetch from 'node-fetch'
import { Service } from 'typedi'

function toAuthorsArray (item: any) {
  return item.name[0]
}
function extractPublishDate (item:any) {
  let date = item.original_publication_year[0]._
  if (item.original_publication_month[0]._) {
    date = date + '-' +
    item.original_publication_month[0]._
  }
  if (item.original_publication_day[0]._) {
    date = date + '-' +
    item.original_publication_day[0]._
  }
  return date
}

@Service({ id: BookProviderToken, multiple: true })
export class GoodReadsBookProvider implements IBookProvider {
  constructor (
  ) { }

  private toBookSearchDto (item: any): BookSearchDto {
    return {
      title: item.best_book[0].title[0],
      authors: item.best_book[0].author.map(toAuthorsArray),
      description: item.best_book[0].description,
      imageLink: item.best_book[0].small_image_url[0],
      subtitle: item.best_book[0].subtitle,
      pageCount: item.best_book[0].pageCount,
      publishedDate: new Date(extractPublishDate(item))
    }
  }

  adapt (data: any): Promise<any> {
    return data.GoodreadsResponse.search[0].results[0].work.map(this.toBookSearchDto)
  }

  async search (query: string) {
    var url = new URL((env.providers.goodReads.endPoint as string).concat('/search/index.xml'))
    const params: RequestParams = {
      key: env.providers.goodReads.apiKey as string,
      q: query
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url).then(res => res.text()).then(res => xml2js.parseStringPromise(res))
  }
}
