import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { UserBook } from './userbook'
import { BookCreateDto } from '../providers/dtos/bookCreateDto'

@Index(['providerId', 'providerName', 'isbn'], { unique: true })
@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsNotEmpty()
    public title!: string;

    @Column({ default: null })
    public subtitle!: string;

    @Column({ default: null, length: 5000 })
    public description!: string;

    @Column({ default: null, length: 5000 })
    public imageLink!: string;

    @Column()
    public pageCount!: number;

    @Column()
    public author!: string;

    @Column({ default: null })
    public publishedDate!: Date;

    @Column()
    @IsNotEmpty()
    public providerName!: string;

    @Column()
    @IsNotEmpty()
    public providerId!: string;

    @Column()
    @IsNotEmpty()
    @Index({ unique: true })
    public isbn!: string;

    @OneToMany(() => UserBook, ub => ub.book)
    public bookConnection!: Promise<UserBook[]>;

    public static buildFromCreateBookDto (bookDto: BookCreateDto) : Book {
      const book = new Book()
      book.description = bookDto.description
      book.author = bookDto.authors[0]
      book.imageLink = bookDto.imageLink
      book.isbn = bookDto.isbn
      book.pageCount = bookDto.pageCount
      // TODO book.publishedDate = bookDto.
      book.title = bookDto.title
      book.subtitle = bookDto.subtitle
      book.providerId = bookDto.id
      book.providerName = bookDto.providerName

      return book
    }
}
