import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AutomobilesService } from 'src/automobiles/automobiles.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceAutomobilesDto } from './dto/update-service-automobiles.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service, ServiceDocument } from './schema/service.schema';

@Injectable()
export class ServicesService {

    constructor(@InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
    private readonly automobilesService: AutomobilesService
    ){}


    async getAll(): Promise<Service[]>{
      return this.serviceModel.find().populate('automobile').exec()
    }

    async getById(id: string)/*: Promise<Service>*/ {
      return this.serviceModel.findById(id)
    }
      
    async create(serviceDto: CreateServiceDto): Promise<Service> {
      const newService= new this.serviceModel(serviceDto) 
      var newAuto, newAId
      for (let i=0; i < serviceDto.automobileId.length; i++) {
        newAuto[i] = await this.automobilesService.getById(serviceDto.automobileId[i].toString())
        newAId[i] = newAuto[i]._id
      }
      newService.automobile = newAId
      for (let i=0; i < newAuto.length; i++) {
        newAuto[i].service.push(newService._id)
      }
      newAuto.save()
      return newService.save()
    }
    
    async remove(id: string): Promise<Service> {
      const service = await this.serviceModel.findById(id)
      const automobiles = await this.automobilesService.getById(service.automobile.toString())   
      for (let i=0; i < automobiles.length; i++) {
        const indexAuto = automobiles[i].service.indexOf(service._id, 0);
        if (indexAuto > -1) {
          automobiles[i].service.splice(indexAuto, 1);
        }
      }
      automobiles.save()
      return this.serviceModel.findByIdAndRemove(id)
    }
    
    async update(id: string, serviceDto: UpdateServiceDto): Promise<Service> {
        return this.serviceModel.findByIdAndUpdate(id, serviceDto, {new: true})
    }

    async updateServiceAutomobiles(id: string, serviceAutoDto: UpdateServiceAutomobilesDto){
      const service = await this.serviceModel.findById(id)
      const oldAutomobile = await this.automobilesService.getById(service.automobile.toString())   
      var newAutomobile, newAutoId
      for (let i=0; i < serviceAutoDto.newAutomobileId.length; i++) {
        newAutomobile[i] = await this.automobilesService.getById(serviceAutoDto.newAutomobileId[i])
        newAutoId[i] = newAutomobile[i]._id
      }  
      for (let i=0; i < oldAutomobile.length; i++) {
        const indexAuto = oldAutomobile[i].service.indexOf(service._id, 0);
        if (indexAuto > -1) {
          oldAutomobile[i].service.splice(indexAuto, 1);
        }
      }
      oldAutomobile.save()
      service.automobile = newAutoId
      for (let i=0; i < newAutomobile.length; i++) {
        newAutomobile[i].service.push(service._id)
      }
      newAutomobile.save()
      return service.save()
    }
}
