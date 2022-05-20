import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Application } from 'src/applications/schema/application.schema';
import { Service } from 'src/services/schema/service.schema';

export type AutomobileDocument = Automobile & Document;

@Schema()
export class Automobile{

  @Prop()
  title: string

  @Prop()
  pricePerKm: number

  @Prop()
  height: number

  @Prop()
  width: number

  @Prop()
  length: number

  @Prop()
  tonnage: number

  @Prop()
  volume: number

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }] })
  service: Service[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }] })
  application: Application[];
}

export const AutomobileSchema = SchemaFactory.createForClass(Automobile);