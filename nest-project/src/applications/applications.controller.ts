import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes, Put } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './schema/application.schema';

@Controller('applications')
export class ApplicationsController {

    constructor(private readonly applicationsService: ApplicationsService){}

  @Get()
  getAll(): Promise<Application[]> {
    return this.applicationsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Application> {
    return this.applicationsService.getById(id)
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCreateDto: CreateApplicationDto): Promise<Application> {
    return this.applicationsService.create(createCreateDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Application> {
    return this.applicationsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateApplicationDto: UpdateApplicationDto, @Param('id') id: string): Promise<Application> {
    return this.applicationsService.update(id, updateApplicationDto)
  }
}
