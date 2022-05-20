import { ObjectId } from "mongoose";
export class CreatePhoneDto{
    readonly number: number
    readonly companyId: ObjectId;
}