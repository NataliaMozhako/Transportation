import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Phone } from './schema/phone.schema';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {

  constructor(private readonly phonesService: PhonesService) { }

  @Get()
  getAll(): Promise<Phone[]> {
    return this.phonesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Phone> {
    return this.phonesService.getById(id)
  }

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto): Promise<Phone> {
    return this.phonesService.create(createPhoneDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Phone> {
    return this.phonesService.remove(id)
  }

  @Put(':id')
  update(@Body() updatePhoneDto: UpdatePhoneDto, @Param('id') id: string): Promise<Phone> {
    return this.phonesService.update(id, updatePhoneDto)
  }
}
