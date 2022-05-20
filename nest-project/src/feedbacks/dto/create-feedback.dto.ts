import { IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateFeedbackDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly text: string
    readonly creationDate: string
    readonly userName: string
    readonly userSurname: string
    readonly companyId: ObjectId;
    readonly userId: ObjectId;
}