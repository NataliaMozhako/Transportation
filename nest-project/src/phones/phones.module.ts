import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { CompaniesModule } from 'src/companies/companies.module';
import { Phone, PhoneSchema } from './schema/phone.schema';

@Module({
    providers: [PhonesService],
    controllers: [PhonesController],
    imports: [MongooseModule.forFeature([
      { name: Phone.name, schema: PhoneSchema }
    ]), CompaniesModule],
    exports: [PhonesService]
})
export class PhonesModule {}
