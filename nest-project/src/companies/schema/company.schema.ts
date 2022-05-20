import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Feedback } from 'src/feedbacks/schema/feedback.schema';
import { Phone } from 'src/phones/schema/phone.schema';

export type CompanyDocument = Company & Document;

@Schema()
export class Company{

  @Prop()
  name: string

  @Prop()
  description: string

  @Prop()
  urlDoc: string

  @Prop()
  email: string

  @Prop()
  address: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Phone' }] })
  phone: Phone[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }] })
  feedback: Feedback[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);