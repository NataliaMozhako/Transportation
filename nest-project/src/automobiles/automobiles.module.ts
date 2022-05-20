import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomobilesService } from './automobiles.service';
import { AutomobilesController } from './automobiles.controller';
import { Automobile, AutomobileSchema } from './schema/automobile.schema';
import { ServicesModule } from 'src/services/services.module';

@Module({
    providers: [AutomobilesService],
    controllers: [AutomobilesController],
    imports: [MongooseModule.forFeature([
        {name: Automobile.name, schema: AutomobileSchema}
        ]), ServicesModule],
    exports: [AutomobilesService]
})
export class AutomobilesModule {}
