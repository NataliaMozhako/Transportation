import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import {Service, ServiceSchema} from './schema/service.schema';
import { AutomobilesModule } from 'src/automobiles/automobiles.module';

@Module({
    providers: [ServicesService],
    controllers: [ServicesController],
    imports: [MongooseModule.forFeature([
        {name: Service.name, schema: ServiceSchema}
        ])],
    exports: [ServicesService]
})
export class ServicesModule {}