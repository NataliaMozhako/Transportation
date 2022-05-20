import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Automobile } from 'src/automobiles/schema/automobile.schema';
import { Application } from 'src/applications/schema/application.schema';

export type ServiceDocument = Service & Document;

@Schema()
export class Service {

  @Prop()
  title: string

  @Prop()
  description: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Automobile' }] })
  automobile: Automobile[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }] })
  application: Application[];
}

export const ServiceSchema = SchemaFactory.createForClass(Service);