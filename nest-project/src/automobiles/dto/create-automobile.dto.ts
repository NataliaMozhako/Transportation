import { ObjectId } from "mongoose"

export class CreateAutomobileDto{
    readonly title: string
    readonly pricePerKm: number
    readonly height: number
    readonly width: number
    readonly length: number
    readonly tonnage: number
    readonly volume: number
    readonly serviceId: ObjectId
}
  