import { ObjectId } from "mongoose"

export class CreateServiceDto{
    readonly title: string
    readonly description: string
    readonly automobileId: ObjectId[]
}

