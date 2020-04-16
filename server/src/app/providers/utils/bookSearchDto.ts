export interface BookSearchDto {
    title: string;
    subtitle: string;
    description: string;
    imageLink: string;
    pageCount: number;
    authors: string[];
    publishedDate: Date;
}
