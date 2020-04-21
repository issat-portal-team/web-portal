import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { UserBook } from './userbook'

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsNotEmpty()
    public title!: string;

    @Column()
    public subtitle!: string;

    @Column()
    public description!: string;

    @Column()
    public imageLink!: string;

    @Column()
    public pageCount!: number;

    @Column()
    public author!: string;

    @Column()
    public publishedDate!: Date;

    @OneToMany(() => UserBook, ub => ub.book)
    public bookConnection!: Promise<UserBook[]>;
}
