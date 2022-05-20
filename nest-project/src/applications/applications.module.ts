import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { Application, ApplicationSchema } from './schema/application.schema';
import { Automobile, AutomobileSchema } from 'src/automobiles/schema/automobile.schema';
import { Service, ServiceSchema } from 'src/services/schema/service.schema';
import { AutomobilesModule } from 'src/automobiles/automobiles.module';
import { ServicesModule } from 'src/services/services.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    providers: [ApplicationsService],
    controllers: [ApplicationsController],
    imports: [MongooseModule.forFeature([
        { name: Application.name, schema: ApplicationSchema },
        { name: Automobile.name, schema: AutomobileSchema },
        { name: Service.name, schema: ServiceSchema },
        ]), 
        AutomobilesModule, ServicesModule, UsersModule, AuthModule],
    exports: [ApplicationsService]
})
export class ApplicationsModule {}
