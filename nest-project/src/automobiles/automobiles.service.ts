import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServicesService } from 'src/services/services.service';
import { CreateAutomobileDto } from './dto/create-automobile.dto';
import { UpdateAutomobileServicesDto } from './dto/update-automobile-services.dto';
import { UpdateAutomobileDto } from './dto/update-automobile.dto';
import { Automobile, AutomobileDocument } from './schema/automobile.schema';

@Injectable()
export class AutomobilesService {

    constructor(@InjectModel(Automobile.name) private automobileModel: Model<AutomobileDocument>,
    private readonly servicesService: ServicesService
    ){}


    async getAll(): Promise<Automobile[]>{
      return this.automobileModel.find().exec();
    }

    async getById(id: string)/*: Promise<Automobile>*/ {
      return this.automobileModel.findById(id)
    }
      
    async create(automobileDto: CreateAutomobileDto): Promise<Automobile> {
      const newAutomobile= new this.automobileModel(automobileDto) 
      var newServ, newSId
      for (let i=0; i < automobileDto.serviceId.length; i++) {
        newServ[i] = await this.servicesService.getById(automobileDto.serviceId[i].toString())
        newSId[i] = newServ[i]._id
      }
      newAutomobile.service = newSId
      for (let i=0; i < newServ.length; i++) {
        newServ[i].automobile.push(newAutomobile._id)
      }
      newServ.save()
      return newAutomobile.save()
    }
   
    async remove(id: string): Promise<Automobile> {
      const automobile = await this.automobileModel.findById(id)
      const services = await this.servicesService.getById(automobile.service.toString())   
      for (let i=0; i < services.length; i++) {
        const indexServ = services[i].automobile.indexOf(automobile._id, 0);
        if (indexServ > -1) {
          services[i].automobile.splice(indexServ, 1);
        }
      }
      services.save()
      return this.automobileModel.findByIdAndRemove(id)
    }
    
    async update(id: string, automobileDto: UpdateAutomobileDto): Promise<Automobile> {
        return this.automobileModel.findByIdAndUpdate(id, automobileDto, {new: true})
    }

    async updateAutomobileServices(id: string, autoServiceDto: UpdateAutomobileServicesDto){
      const automobile = await this.automobileModel.findById(id)
      const oldService = await this.servicesService.getById(automobile.service.toString())   
      var newService, newServId
      for (let i=0; i < autoServiceDto.newServiceId.length; i++) {
        newService[i] = await this.servicesService.getById(autoServiceDto.newServiceId[i])
        newServId[i] = newService[i]._id
      }  
      for (let i=0; i < oldService.length; i++) {
        const indexServ = oldService[i].automobile.indexOf(automobile._id, 0);
        if (indexServ > -1) {
          oldService[i].automobile.splice(indexServ, 1);
        }
      }
      oldService.save()
      automobile.service = newServId
      for (let i=0; i < newService.length; i++) {
        newService[i].automobile.push(automobile._id)
      }
      newService.save()
      return automobile.save()
    }
}
