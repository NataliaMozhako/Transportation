import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Profile } from 'src/profiles/schema/profile.schema';
import { Role } from 'src/roles/schema/role.schema';
import { Application } from 'src/applications/schema/application.schema';

export type UserDocument = User & Document;

@Schema()
export class User{

  _id: mongoose.ObjectId

  @Prop()
  userName: string
  
  @Prop()
  userSurname: string

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  blocked: boolean

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
  profile: Profile;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  role: Role;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }] })
  application: Application[];

}

export const UserSchema = SchemaFactory.createForClass(User);