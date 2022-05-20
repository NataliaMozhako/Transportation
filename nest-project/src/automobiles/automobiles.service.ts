import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServicesService } from 'src/services/services.service';
import { CreateAutomobileDto } from './dto/create-automobile.dto';
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
      const service = await this.servicesService.getById(automobileDto.serviceId.toString())
      newAutomobile.service = service._id
      service.automobile.push(newAutomobile._id)
      service.save()
      return newAutomobile.save()
    }
   
    async remove(id: string): Promise<Automobile> {
      const automobile = await this.automobileModel.findById(id)
      const service = await this.servicesService.getById(automobile.service.toString())   
      const indexService = service.automobile.indexOf(automobile._id, 0)
      if (indexService > -1){
          service.automobile.splice(indexService, 1)
      }
      service.save()
      return this.automobileModel.findByIdAndRemove(id)
    }
    
    async update(id: string, automobileDto: UpdateAutomobileDto): Promise<Automobile> {
        return this.automobileModel.findByIdAndUpdate(id, automobileDto, {new: true})
    }
}
