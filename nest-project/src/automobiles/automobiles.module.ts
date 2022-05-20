import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomobilesService } from './automobiles.service';
import { AutomobilesController } from './automobiles.controller';
import { Automobile, AutomobileSchema } from './schema/automobile.schema';

@Module({
    providers: [AutomobilesService],
    controllers: [AutomobilesController],
    imports: [MongooseModule.forFeature([
        {name: Automobile.name, schema: AutomobileSchema}
        ])],
    exports: [AutomobilesService]
})
export class AutomobilesModule {}
