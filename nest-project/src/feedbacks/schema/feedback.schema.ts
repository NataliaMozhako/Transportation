import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { Company } from 'src/companies/schema/company.schema';

export type FeedbackDocument = Feedback & Document;

@Schema()
export class Feedback{
  
  @Prop()
  text: string

  @Prop()
  creationDate: string

  @Prop()
  userName: string

  @Prop()
  userSurname: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company: Company;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);