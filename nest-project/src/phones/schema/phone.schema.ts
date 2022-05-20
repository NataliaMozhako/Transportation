import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Company } from 'src/companies/schema/company.schema';

export type PhoneDocument = Phone & Document;

@Schema()
export class Phone {

  @Prop()
  number: number

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company: Company;
}

export const PhoneSchema = SchemaFactory.createForClass(Phone);