import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback, FeedbackDocument } from './schema/feedback.schema';
import { CompaniesService } from 'src/companies/companies.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class FeedbacksService {

  constructor(
    @InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>,
    private readonly companiesService: CompaniesService,
    private readonly usersService: UsersService) { }


  async getAll(): Promise<Feedback[]> {
    return this.feedbackModel.find().exec();
  }

  async getById(id: string)/*: Promise<Feedback>*/ {
    return this.feedbackModel.findById(id)
  }

  async create(feedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const company = await this.companiesService.getById(feedbackDto.companyId.toString())
    const user = await this.usersService.getById(feedbackDto.userId.toString())
    const newFeedback = new this.feedbackModel(feedbackDto)
    newFeedback.user = user._id
    var _date = new Date()
    newFeedback.creationDate = _date.toDateString() + ' ' + _date.getHours().toString() + ':' +
      _date.getMinutes().toString()
    newFeedback.company = company._id
    company.feedback.push(newFeedback._id)
    company.save()
    newFeedback.userName = user.userName
    newFeedback.userSurname = user.userSurname
    return newFeedback.save()
  }

  async remove(id: string): Promise<Feedback> {
    const feedback = await this.feedbackModel.findById(id)
    const company = await this.companiesService.getById(feedback.company.toString())
    const indexCompany = company.feedback.indexOf(feedback._id, 0)
    if (indexCompany > -1){
      company.feedback.splice(indexCompany, 1)
    }
    company.save()
    return this.feedbackModel.findByIdAndRemove(id)
  }
}
