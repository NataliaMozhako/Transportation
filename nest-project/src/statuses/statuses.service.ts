import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status, StatusDocument } from './schema/status.schema';
import { ApplicationsService } from 'src/applications/applications.service';

@Injectable()
export class StatusesService {

  constructor(
    @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
    private readonly applicationsService: ApplicationsService) { }


  async getAll(): Promise<Status[]> {
    return this.statusModel.find().exec();
  }

  async getById(id: string)/*: Promise<Status> */{
    return this.statusModel.findById(id)
  }

  async create(statusDto: CreateStatusDto): Promise<Status> {
    const newStatus = new this.statusModel(statusDto)
    const application = await this.applicationsService.getById(statusDto.applicationId.toString())
    var _date = new Date()
    newStatus.creationDate = _date.toDateString() + ' ' + _date.getHours().toString() + ':' +
      _date.getMinutes().toString()
    newStatus.application = application._id
    application.status.push(newStatus._id)
    application.save()
    return newStatus.save()
  }

  async remove(id: string): Promise<Status> {
    const status = await this.statusModel.findById(id)
    const application = await this.applicationsService.getById(status.application.toString())
    const indexApplication = application.status.indexOf(status._id, 0)
    if (indexApplication > -1){
        application.status.splice(indexApplication, 1)
    }
    application.save()
    return this.statusModel.findByIdAndRemove(id)
  }
}
