import { GoogleBookProvider } from '../googleBookProvider'
import { GoodReadsBookProvider } from '../goodreadsBookProvider'

export function loadBooksProviders (iocContainer: {import(funcs: any): any;}) {
  iocContainer.import([
    GoogleBookProvider
    // GoodReadsBookProvider
  ])
}
