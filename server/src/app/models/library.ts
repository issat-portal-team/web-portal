import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm'
import { Book } from './book'
import { User } from './user'

@Entity()
export class Library {
    @Column({ type: 'int' })
    public state!: number;

    @PrimaryGeneratedColumn('uuid')
    userId!: string;

    @PrimaryGeneratedColumn()
    bookId!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @OneToOne(() => Book)
    @JoinColumn()
    book!: Book;
}
