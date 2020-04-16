import Container, { Service } from 'typedi'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { User } from '../models/user'
import { UserRepository } from '../repositories/userRepository'
import { BookProviderToken } from '../providers/utils/bookProviderToken'
import { BookSearchDto } from '../providers/utils/bookSearchDto'

@Service()
export class BookService {
  constructor (
  ) { }

  public async search (query: string): Promise<any | undefined> {
    const providers = Container.getMany(BookProviderToken)
    let results : BookSearchDto[] = []

    for (const provider of providers) {
      const asyncResult = await provider.search(query).then(data => {
        console.log(data)
        return provider.adapt(data)
      })

      // For now just concat the results
      // TODO: Filter/prioritize/Join the results
      results = results.concat(asyncResult)
    }
    return results
  }
}
