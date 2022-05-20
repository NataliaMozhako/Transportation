import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompaniesService } from './companies.service';
import { Company } from './schema/company.schema';

@Controller('companies')
export class CompaniesController {

  constructor(private readonly companiesService: CompaniesService) { }

  @Get()
  getAll(): Promise<Company[]> {
    return this.companiesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.getById(id)
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Company> {
    return this.companiesService.remove(id)
  }

  @Put(':id')
  update(@Body() updateCompanyDto: UpdateCompanyDto, @Param('id') id: string): Promise<Company> {
    return this.companiesService.update(id, updateCompanyDto)
  }
}

