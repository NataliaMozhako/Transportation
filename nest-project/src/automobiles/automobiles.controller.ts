import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CreateAutomobileDto } from './dto/create-automobile.dto';
import { UpdateAutomobileDto } from './dto/update-automobile.dto';
import { Automobile } from './schema/automobile.schema';
import { AutomobilesService } from './automobiles.service';


@Controller('automobiles')
export class AutomobilesController {

  constructor(private readonly automobilesService: AutomobilesService) { }

  @Get()
  getAll(): Promise<Automobile[]> {
    return this.automobilesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Automobile> {
    return this.automobilesService.getById(id)
  }

  @Post()
  create(@Body() createAutomobileDto: CreateAutomobileDto): Promise<Automobile> {
    return this.automobilesService.create(createAutomobileDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Automobile> {
    return this.automobilesService.remove(id)
  }

  @Put(':id')
  update(@Body() updateAutomobileDto: UpdateAutomobileDto, @Param('id') id: string): Promise<Automobile> {
    return this.automobilesService.update(id, updateAutomobileDto)
  }
}
