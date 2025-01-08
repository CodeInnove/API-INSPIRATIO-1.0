import { HttpException, HttpStatus, Injectable, Query } from "@nestjs/common";
import { ScaleAsrsRepository } from "./scaleASRS.repository";
import { QueryScaleASRSpDto } from "./dto/scaleASRSQuery.dto";
import { CreateScaleAsrsDto} from "./dto/scaleASRSCreate.dto";
import { UpdateScaleAsrDto } from "./dto/scaleASRSUpdate.dto";

@Injectable()
export class ScaleAsrsService {
  constructor(
    private readonly scaleAsrsRepository: ScaleAsrsRepository
  ) {}

  async create(data: CreateScaleAsrsDto) {
    try{
      return this.scaleAsrsRepository.create(data);
    } catch (error) {
      throw new HttpException({ message: error.message },HttpStatus.BAD_REQUEST,);
    }
  }

  async findAll(@Query() query: QueryScaleASRSpDto) {
    try{
      return this.scaleAsrsRepository.findAll(query);
    } catch (error) {
      throw new HttpException({ message: error.message },HttpStatus.BAD_REQUEST,);
    }
  }

  async findById(id: string) {
    try{
      return this.scaleAsrsRepository.findById(id);
    } catch (error) {
      throw new HttpException({ message: error.message },HttpStatus.BAD_REQUEST,);
    }
  }

  async update(id: string, update: UpdateScaleAsrDto) {
    try{
      return this.scaleAsrsRepository.update(id, update);
    } catch (error) {
      throw new HttpException({ message: error.message },HttpStatus.BAD_REQUEST,);
    }
  }

  async delete(id: string) {
    try{
      return this.scaleAsrsRepository.delete(id);
    } catch (error) {
      throw new HttpException({ message: error.message },HttpStatus.BAD_REQUEST,);
    }
  }
}
