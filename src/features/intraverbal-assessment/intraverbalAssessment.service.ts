import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IntraverbalAssessmentRepository } from "./intraverbalAssessment.repository";
import { CreateIntraverbalAssessmentDto } from "./dto/intraverbalAssessmentCreate.dto";

@Injectable()
export class IntraverbalAssessmentService {
  constructor(
    private readonly intraverbalAssessmentRepository: IntraverbalAssessmentRepository
  ) {}

  async create(data: CreateIntraverbalAssessmentDto) {
      try {
        const consultation = await this.intraverbalAssessmentRepository.create(data)
        
        return consultation;
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    async findAll() {
      try {
        return this.intraverbalAssessmentRepository.findAll();
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
  
    async findById(id: string) {
      try {
        return this.intraverbalAssessmentRepository.findById(id);
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    async update(id: string, data: any) {
      try {
        return this.intraverbalAssessmentRepository.update(id, data);
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    async delete(id: string) {
      try {
        return this.intraverbalAssessmentRepository.delete(id);
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
}