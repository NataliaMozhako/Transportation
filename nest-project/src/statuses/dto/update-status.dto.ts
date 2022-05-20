import { IsString } from "class-validator";

export class UpdateStatusDto{
    @IsString({ message: 'Должно быть строкой' })
    readonly description: string
    readonly creationDate: string
}