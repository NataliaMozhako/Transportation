import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { Company, CompanySchema } from './schema/company.schema';

@Module({
  providers: [CompaniesService],
  controllers: [CompaniesController],
  imports: [MongooseModule.forFeature([
    { name: Company.name, schema: CompanySchema }
  ])],
  exports: [CompaniesService]
})
export class CompaniesModule {}
