import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Application } from 'src/applications/schema/application.schema';

export type StatusDocument = Status & Document;

@Schema()
export class Status {

  _id: mongoose.ObjectId

  @Prop()
  description: string

  @Prop()
  creationDate: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Application' })
  application: Application;
}

export const StatusSchema = SchemaFactory.createForClass(Status);