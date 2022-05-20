import { IsEmail, IsString, Length } from "class-validator"

export class UpdateUserDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly userName: string

  @IsString({ message: 'Должно быть строкой' })
  readonly userSurname: string

  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email: string

  @IsString({message: 'Должно быть строкой'})
  @Length(6, 16, {message: 'Не меньше 6 и не больше 16'})
  readonly password: string
} 