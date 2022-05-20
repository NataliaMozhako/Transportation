import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status} from './schema/status.schema';

@Controller('statuses')
export class StatusesController {

    constructor(private readonly statusesService: StatusesService){}

  @Get()
  getAll(): Promise<Status[]> {
    return this.statusesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Status> {
    return this.statusesService.getById(id)
  }

  // @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCreateDto: CreateStatusDto): Promise<Status> {
    return this.statusesService.create(createCreateDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Status> {
    return this.statusesService.remove(id)
  }
}
