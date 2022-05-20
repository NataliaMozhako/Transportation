import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application, ApplicationDocument } from './schema/application.schema';
import { UsersService } from 'src/users/users.service';
import { AutomobilesService } from 'src/automobiles/automobiles.service';
import { ServicesService } from 'src/services/services.service';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {

  constructor(
    @InjectModel(Application.name) private applicationModel: Model<ApplicationDocument>,
    private readonly usersService: UsersService,
    private readonly automobilesService: AutomobilesService,
    private readonly servicesService: ServicesService
    ) { }


  async getAll(): Promise<Application[]> {
    return this.applicationModel.find().exec();
  }

  async getById(id: string)/*: Promise<Application>*/ {
    return this.applicationModel.findById(id).populate('status').populate('automobile').populate('service')
  }

  async create(applicationDto: CreateApplicationDto): Promise<Application> {
    const user = await this.usersService.getUserByEmail(applicationDto.email.toString())
    const newApplication = new this.applicationModel(applicationDto)
    const automobile = await this.automobilesService.getById(applicationDto.automobileId.toString())
    const service = await this.servicesService.getById(applicationDto.serviceId.toString())
    var _date = new Date()
    newApplication.creationDate = _date.toDateString() + ' ' + _date.getHours().toString() + ':' +
      _date.getMinutes().toString()
    newApplication.automobile = automobile._id
    newApplication.service = service._id
    newApplication.user = user._id
    automobile.application.push(newApplication._id)
    service.application.push(newApplication._id)
    user.application.push(newApplication._id)
    automobile.save()
    service.save()
    user.save()
    return newApplication.save()
  }

  async remove(id: string): Promise<Application> {
    const application = await this.applicationModel.findById(id)
    const automobile = await this.automobilesService.getById(application.automobile.toString())
    const service = await this.servicesService.getById(application.service.toString())
    const user = await this.usersService.getById(application.user.toString())
    const indexAutomobile = automobile.application.indexOf(application._id, 0)
    if (indexAutomobile > -1){
        automobile.application.splice(indexAutomobile, 1)
    }
    const indexService = service.application.indexOf(application._id, 0)
    if (indexService > -1){
        service.application.splice(indexService, 1)
    }
    const indexUser = user.application.indexOf(application._id, 0)
    if (indexUser > -1){
        user.application.splice(indexUser, 1)
    }
    automobile.save()
    service.save()
    user.save()
    return this.applicationModel.findByIdAndRemove(id)
  }

  async update(id: string, applicationDto: UpdateApplicationDto): Promise<Application> {
    return this.applicationModel.findByIdAndUpdate(id, applicationDto, { new: true })
  }
}
