import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './schema/feedback.schema';

@Controller('feedbacks')
export class FeedbacksController {

    constructor(private readonly feedbacksService: FeedbacksService){}

  @Get()
  getAll(): Promise<Feedback[]> {
    return this.feedbacksService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Feedback> {
    return this.feedbacksService.getById(id)
  }

  // @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCreateDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbacksService.create(createCreateDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Feedback> {
    return this.feedbacksService.remove(id)
  }
}
