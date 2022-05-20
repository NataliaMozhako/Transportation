import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { Application, ApplicationSchema } from './schema/application.schema';
import { Service, ServiceSchema } from 'src/services/schema/service.schema';
import { ServicesModule } from 'src/services/services.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    providers: [ApplicationsService],
    controllers: [ApplicationsController],
    imports: [MongooseModule.forFeature([
        { name: Application.name, schema: ApplicationSchema },
        { name: Service.name, schema: ServiceSchema },
        ]), 
        ServicesModule, UsersModule, AuthModule],
    exports: [ApplicationsService]
})
export class ApplicationsModule {}
