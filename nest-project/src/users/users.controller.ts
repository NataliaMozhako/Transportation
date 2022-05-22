import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { UsersService } from './users.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id)
  }

  @Get('/email/:id')
  getOneEmail(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserByEmail(id)
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Body() createProfileDto: CreateProfileDto): Promise<User> {
    return this.usersService.create(createUserDto, createProfileDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(id)
  }

  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<User> {
    return this.usersService.update(id, updateUserDto)
  }

  @Get('/ban/:id')
  banUser(@Param('id') id: string){
    return this.usersService.banUser(id)
  }

  @Put('/password/:id')
  updatePassword(@Param('id') id: string, @Body() updatePasswordDto: UpdatePasswordDto){
    return this.usersService.updatePassword(id, updatePasswordDto)
  }

  @Get('/role/:id')
  updateRole(@Param('id') id: string){
    return this.usersService.updateRole(id)
  }
}
