import { IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateStatusDto{
    @IsString({ message: 'Должно быть строкой' })
    readonly description: string
    readonly creationDate: string
    readonly applicationId: ObjectId;
}