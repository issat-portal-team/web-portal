import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

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
}
