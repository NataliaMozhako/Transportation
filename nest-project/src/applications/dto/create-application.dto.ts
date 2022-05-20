import { IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateApplicationDto {
  @IsString({message: 'Должно быть строкой'})
  readonly numberId: string
  @IsString({message: 'Должно быть строкой'})
  readonly creationDate: string
  readonly email: string
  readonly serviceId: ObjectId
  readonly automobileId: ObjectId
}