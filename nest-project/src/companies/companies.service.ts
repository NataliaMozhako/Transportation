import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, CompanyDocument } from './schema/company.schema';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>) { }


  async getAll(): Promise<Company[]> {
    return this.companyModel.find().exec()
  }

  async getById(id: string)/*: Promise<Company>*/ {
    return await this.companyModel.findById(id).populate('feedback').populate('phone')
  }

  async create(companyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = new this.companyModel(companyDto)
    return newCompany.save()
  }

  async remove(id: string): Promise<Company> {
    return this.companyModel.findByIdAndRemove(id)
  }

  async update(id: string, companyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(id, companyDto, { new: true })
  }

}

