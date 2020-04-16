export interface IBookProvider {
    search(query: string): Promise<any|undefined>
    adapt(data: any): Promise<any|undefined>
}
