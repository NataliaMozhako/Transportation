import { IsString } from "class-validator";

export class CreateCompanyDto {
  @IsString({message: 'Должно быть строкой'})
  readonly name: string
  @IsString({message: 'Должно быть строкой'})
  readonly description: string
  @IsString({message: 'Должно быть строкой'})
  readonly urlDoc: string
  readonly email: string
  readonly address: string
}