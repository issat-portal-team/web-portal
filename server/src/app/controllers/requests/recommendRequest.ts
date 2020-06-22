import { IsNotEmpty } from 'class-validator'

export class RecommendRequest {
    @IsNotEmpty()
    public name!: string;
}
