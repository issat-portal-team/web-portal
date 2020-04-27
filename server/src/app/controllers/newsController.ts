import { JsonController, Post, Body, Get } from 'routing-controllers'
import { NewsService } from '../services/newsService'
import { NewsCreateRequest } from './requests/news/newsCreateRequest'
import { NewsResponse } from './responses/newsResponse'
import { News } from '../models/news'
import { NewsDate } from '../models/dateNews'

@JsonController('/news')
export class NewsController {
    constructor(private newsService: NewsService) { }
    @Post()
    public async create(@Body() body: NewsCreateRequest): Promise<NewsResponse> {
        const news: News[] =[]
        body.news.forEach(element => {
            const newsItem = new News()
            newsItem.title = element.title
            newsItem.source = element.source
            newsItem.link = element.link
            newsItem.publishedDate = element.publishedDate
            news.push(newsItem)
        })

        const newsDate = new NewsDate()
        newsDate.date = body.createdDate.date

        const data = await this.newsService.create(news,newsDate)
        const responses = new NewsResponse()
        responses.news= []
        data.forEach((el)=>{
            const item = {
                id : el.id,
                title: el.title,
                link: el.link,
                source: el.source,
                publishedDate: el.publishedDate,
                createdDate: el.createdDate
            }
            responses.news.push(item)
        })
        return responses
    }

    // @Get()
    // public async getNews(): Promise<NewsResponse>{

    // }


    // {
    //  "news" :
    //  [
    //   {
    //     "title" : "this is a fake title",
    //     "source" : "this is a fake source",
    //     "link" : "www.fakeLink.com",
    //     "publishedDate": "2020-04-26T12:59:16.102Z",
    //   },
    //   {
    //      "title" : "this is a fake title",
    //      "source" : "this is a fake source",
    //      "link" : "www.fakeLink.com",
    //      "publishedDate": "2020-04-26T12:59:16.102Z",
    //    },
    //    {
    //      "title" : "this is a fake title",
    //      "source" : "this is a fake source",
    //      "link" : "www.fakeLink.com",
    //      "publishedDate": "2020-04-26T12:59:16.102Z",
    //    }
    //  ],
    //  "createdDate" : {
    //     "date": "2020-04-26T20:59:16.102Z"
    //  }
    // }
}
