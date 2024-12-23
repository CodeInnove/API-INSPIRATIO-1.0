import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAflEntity } from "src/entities/afl.entity";
import { AflsRepository } from "./afls.repository";
import { CreateAflDto } from "./dto/create-afl.dto";
import { UpdateAflDto } from "./dto/update-afl.dto";

@Injectable()
export class AflService {
  constructor(
    private readonly aflRepository: AflsRepository
  ) {}

  async createAfl(afl: CreateAflDto): Promise<IAflEntity> {
    try {
      return await this.aflRepository.create(afl);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllAfls(): Promise<IAflEntity[]> {
    try {
      return await this.aflRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneAfl(id: string): Promise<IAflEntity> {
    try {
      return await this.aflRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async updateAfl(id: string, afl: UpdateAflDto): Promise<IAflEntity> {
    try {
      return await this.aflRepository.update(id, afl);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteAfl(id: string): Promise<IAflEntity> {
    try {
      return await this.aflRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}