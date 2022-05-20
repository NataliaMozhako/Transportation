import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service, ServiceDocument } from './schema/service.schema';

@Injectable()
export class ServicesService {

    constructor(@InjectModel(Service.name) private serviceModel: Model<ServiceDocument>){}


    async getAll(): Promise<Service[]>{
      return this.serviceModel.find().exec()
    }

    async getById(id: string)/*: Promise<Service>*/ {
      return this.serviceModel.findById(id).populate('automobile').populate('application')
    }
      
    async create(serviceDto: CreateServiceDto): Promise<Service> {
      const newService= new this.serviceModel(serviceDto) 
      return newService.save()
    }
    
    async remove(id: string): Promise<Service> {
      return this.serviceModel.findByIdAndRemove(id)
    }
    
    async update(id: string, serviceDto: UpdateServiceDto): Promise<Service> {
        return this.serviceModel.findByIdAndUpdate(id, serviceDto, {new: true})
    }
}
