import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './schema/service.schema';
import { UpdateServiceAutomobilesDto } from './dto/update-service-automobiles.dto';


@Controller('services')
export class ServicesController {

  constructor(private readonly servicesService: ServicesService) { }

  @Get()
  getAll(): Promise<Service[]> {
    return this.servicesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Service> {
    return this.servicesService.getById(id)
  }

  @Post()
  create(@Body() createServiceDto: CreateServiceDto): Promise<Service> {
    return this.servicesService.create(createServiceDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Service> {
    return this.servicesService.remove(id)
  }

  @Put(':id')
  update(@Body() updateServiceDto: UpdateServiceDto, @Param('id') id: string): Promise<Service> {
    return this.servicesService.update(id, updateServiceDto)
  }

  @Put('/automobile/:id')
  updateServiceAutomobiles(@Param('id') id: string, @Body() serviceautoDto: UpdateServiceAutomobilesDto) {
    return this.servicesService.updateServiceAutomobiles(id, serviceautoDto)
  }
}
