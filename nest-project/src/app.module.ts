import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StatusesModule } from './statuses/statuses.module';
import { ServicesModule } from './services/services.module';
import { RolesModule } from './roles/roles.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PhonesModule } from './phones/phones.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { CompaniesModule } from './companies/companies.module';
import { AutomobilesModule } from './automobiles/automobiles.module';
import { AuthModule } from './auth/auth.module';
import { ApplicationsModule } from './applications/applications.module';


@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://NataliMozhako:transportapp@clustertransportdb.dgfnk.mongodb.net/TransportDB?retryWrites=true&w=majority'
  ), 
  UsersModule, 
  StatusesModule, 
  ServicesModule, 
  RolesModule, 
  ProfilesModule, 
  PhonesModule, 
  FeedbacksModule, 
  CompaniesModule, 
  AutomobilesModule, 
  AuthModule, 
  ApplicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
