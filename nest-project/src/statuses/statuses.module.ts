import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusesController } from './statuses.controller';
import { StatusesService } from './statuses.service';
import {Status, StatusSchema} from './schema/status.schema';
import { ApplicationsModule } from 'src/applications/applications.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    providers: [StatusesService],
    controllers: [StatusesController],
    imports: [MongooseModule.forFeature([
      { name: Status.name, schema: StatusSchema }
    ]), ApplicationsModule, AuthModule],
    exports: [StatusesService]
})
export class StatusesModule {}
