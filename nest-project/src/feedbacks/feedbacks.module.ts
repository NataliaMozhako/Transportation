import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { UsersModule } from 'src/users/users.module';
import { FeedbacksController } from './feedbacks.controller'; 
import { FeedbacksService } from './feedbacks.service';
import { Feedback, FeedbackSchema } from './schema/feedback.schema';

@Module({
  providers: [FeedbacksService],
  controllers: [FeedbacksController],
  imports: [MongooseModule.forFeature([
    { name: Feedback.name, schema: FeedbackSchema }
  ]), UsersModule, CompaniesModule, AuthModule],
  exports: [FeedbacksService]
})
export class FeedbacksModule {}
