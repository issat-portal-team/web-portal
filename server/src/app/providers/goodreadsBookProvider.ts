import { Service } from 'typedi'
import { BookProviderToken } from './utils/bookProviderToken'
import { IBookProvider } from './iBookProvider'

@Service({ id: BookProviderToken, multiple: true })
export class GoodReadsBookProvider implements IBookProvider {
  constructor (
  ) { }

  adapt (data: any): Promise<any> {
    return Promise.resolve(() => undefined)
  }

  search (query: string) {
    // throw new Error('Method not implemented.')
    return Promise.resolve(() => undefined)
  }
}
