import { IsNotEmpty, IsNumber } from 'class-validator'

export class UserBookProgressUpdateRequest {
    @IsNotEmpty()
    public bookId!: number;

    @IsNotEmpty()
    @IsNumber()
    public progress!: number;
}
