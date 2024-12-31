import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AnamnesisSpeechTherapyRepository } from "./anamnesisSpeechTherapy.repository";
import { CreateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyCreate.dto";
import { IAnamnesisSpeechTherapyEntity } from "src/entities/anamnesisSpeechTherapy.entity";
import { QueryAnamnesisTherapyDto } from "./dto/anamnesisSpeechTherapyQuery.dto";
import { UpdateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyUpdate.dto";

@Injectable()
export class AnamnesisSpeechTherapyService {
  constructor(
    private readonly anamnesisSpeechTherapyRepository: AnamnesisSpeechTherapyRepository
  ) {}

 async create(anamnesisSpeechTherapy: CreateAnamnesisSpeechTherapyDto): Promise<IAnamnesisSpeechTherapyEntity> {
       try {
         return await this.anamnesisSpeechTherapyRepository.create(anamnesisSpeechTherapy);
       } catch (error) {
         throw new HttpException(error, HttpStatus.BAD_REQUEST);
       }
     }
 
   async findAll(queryDto: QueryAnamnesisTherapyDto) {
       try {
         return await this.anamnesisSpeechTherapyRepository.findAll(queryDto);
       } catch (error) {
         throw new HttpException(error, HttpStatus.BAD_REQUEST);
       }
     }
   
     async findById(id: string) {
       try {
         return await this.anamnesisSpeechTherapyRepository.findById(id);
       } catch (error) {
         throw new HttpException(error, HttpStatus.BAD_REQUEST);
       }
     }
   
     async update(id: string, update: UpdateAnamnesisSpeechTherapyDto) {
       try {
         return await this.anamnesisSpeechTherapyRepository.update(id, update);
       } catch (error) {
         throw new HttpException(error, HttpStatus.BAD_REQUEST);
       }
     }
   
     async delete(id: string){
       try {
         return await this.anamnesisSpeechTherapyRepository.delete(id);
       } catch (error) {
         throw new HttpException(error, HttpStatus.BAD_REQUEST);
       }
     }
   }