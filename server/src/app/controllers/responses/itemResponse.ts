import {DateNewsResponse} from './dateNewsResponse'

export class ItemResponse {
    readonly id!: number
    public title!: string
    public source!: string
    public link!: string
    public publishedDate!: Date
    public createdDate!: DateNewsResponse
}
