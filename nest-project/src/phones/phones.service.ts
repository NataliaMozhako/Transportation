import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompaniesService } from 'src/companies/companies.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Phone, PhoneDocument } from './schema/phone.schema';

@Injectable()
export class PhonesService {

    constructor(@InjectModel(Phone.name) private phoneModel: Model<PhoneDocument>,
    private readonly companiesService: CompaniesService){}


    async getAll(): Promise<Phone[]>{
      return this.phoneModel.find().exec();
    }

    async getById(id: string)/*: Promise<Phone>*/ {
      return this.phoneModel.findById(id)
    }
      
    async create(phoneDto: CreatePhoneDto): Promise<Phone> {
      const company = await this.companiesService.getById(phoneDto.companyId.toString())
      const newPhone= new this.phoneModel(phoneDto) 
      newPhone.company = company._id
      company.phone.push(newPhone._id)
      company.save()
      return newPhone.save()
    }
    
    async remove(id: string): Promise<Phone> {
      const phone = await this.phoneModel.findById(id)
      const company = await this.companiesService.getById(phone.company.toString())
      const indexCompany = company.phone.indexOf(phone._id, 0)
      if (indexCompany > -1){
        company.phone.splice(indexCompany, 1)
      }
      company.save()
      return this.phoneModel.findByIdAndRemove(id)
    }
    
    async update(id: string, phoneDto: UpdatePhoneDto): Promise<Phone> {
        return this.phoneModel.findByIdAndUpdate(id, phoneDto, {new: true})
    }
}
