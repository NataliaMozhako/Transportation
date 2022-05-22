import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Service } from 'src/services/schema/service.schema';
import { Status } from 'src/statuses/schema/status.schema';
import { User } from 'src/users/schema/user.schema';

export type ApplicationDocument = Application & Document;

@Schema()
export class Application{
  
  @Prop()
  numberId: string

  @Prop()
  creationDate: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Service' })
  service: Service;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Status' }] })
  status: Status[];
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);