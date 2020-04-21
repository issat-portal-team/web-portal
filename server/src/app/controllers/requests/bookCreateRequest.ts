import { IsNotEmpty, IsNumber, IsUUID, IsDate } from 'class-validator'

export class BookCreateRequest {
    @IsNotEmpty()
    @IsUUID()
    public id!: number;

    @IsNotEmpty()
    public title!: string;

    @IsNotEmpty()
    public subtitle!: string;

    @IsNotEmpty()
    public description!: string;

    @IsNotEmpty()
    public imageLink!: string;

    @IsNotEmpty()
    @IsNumber()
    public pageCount!: number;

    @IsNotEmpty()
    public author!: string;

    @IsNotEmpty()
    @IsDate()
    public publishedDate!: Date;
}
