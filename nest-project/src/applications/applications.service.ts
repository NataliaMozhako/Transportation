import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application, ApplicationDocument } from './schema/application.schema';
import { UsersService } from 'src/users/users.service';
import { ServicesService } from 'src/services/services.service';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {

  constructor(
    @InjectModel(Application.name) private applicationModel: Model<ApplicationDocument>,
    private readonly usersService: UsersService,
    private readonly servicesService: ServicesService
    ) { }


  async getAll(): Promise<Application[]> {
    return this.applicationModel.find().exec();
  }

  async getById(id: string)/*: Promise<Application>*/ {
    return this.applicationModel.findById(id).populate('status')
  }

  async create(applicationDto: CreateApplicationDto): Promise<Application> {
    const user = await this.usersService.getUserByEmail(applicationDto.email.toString())
    const newApplication = new this.applicationModel(applicationDto)
    const service = await this.servicesService.getById(applicationDto.serviceId.toString())
    var _date = new Date()
    newApplication.creationDate = _date.toDateString() + ' ' + _date.getHours().toString() + ':' +
      _date.getMinutes().toString()
    newApplication.service = service._id
    newApplication.user = user._id
    service.application.push(newApplication._id)
    user.application.push(newApplication._id)
    service.save()
    user.save()
    return newApplication.save()
  }

  async remove(id: string): Promise<Application> {
    const application = await this.applicationModel.findById(id)
    const service = await this.servicesService.getById(application.service.toString())
    const user = await this.usersService.getById(application.user.toString())
    const indexService = service.application.indexOf(application._id, 0)
    if (indexService > -1){
        service.application.splice(indexService, 1)
    }
    const indexUser = user.application.indexOf(application._id, 0)
    if (indexUser > -1){
        user.application.splice(indexUser, 1)
    }
    service.save()
    user.save()
    return this.applicationModel.findByIdAndRemove(id)
  }

  async update(id: string, applicationDto: UpdateApplicationDto): Promise<Application> {
    return this.applicationModel.findByIdAndUpdate(id, applicationDto, { new: true })
  }
}
