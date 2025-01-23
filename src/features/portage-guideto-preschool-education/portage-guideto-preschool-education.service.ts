import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePortageGuidetoPreschoolEducationDto,  } from "./dto/create-portage-guideto-preschool-education.dto";
import { UpdatePortageGuidetoPreschoolEducationDto } from "./dto/update-portage-guideto-preschool-education.dto";
import { IPortageGuidetoPreschoolEducationEntity } from "src/entities/portage-guideto-preschool-education.entity";
import { PortageGuidetoPreschoolEducationRepository } from "./portage-guideto-preschool-education.repository";
import { QueryPortageGuidetoDto } from "./dto/query-portage-guideto-preschool-educational.dto";

type ResponseBoolean = 'SIM' | 'SIM COM MEDIACAO' | 'NAO';

interface AreaScores {
  socializacao: number;
  linguagem: number;
  cognicao: number;
  autoCuidado: number;
  motor: number;
}

@Injectable()
export class PortageGuidetoPreschoolEducationService {
  constructor(
    private readonly portageGuidetoPreschoolEducationRepository: PortageGuidetoPreschoolEducationRepository
  ) { }

  private scoreResponse(response: ResponseBoolean): number {
    const scoreMap = {
      'SIM': 1,
      'SIM COM MEDIACAO': 0.5,
      'NAO': 0,
    };
    return scoreMap[response] ?? 0;
  }

  private calculateAreaScore(data: any): number {
    let totalScore = 0;
    if (!data) return totalScore;

    for (const key in data) {
      if (typeof data[key] === 'string') {
        totalScore += this.scoreResponse(data[key] as ResponseBoolean);
      }
    }

    return totalScore;
  }

  async create(dto: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    try {
      // Calcula os scores para cada área
      const socializacao =
        this.calculateAreaScore(dto.socialization0To1Years) +
        this.calculateAreaScore(dto.socialization1To2Years) +
        this.calculateAreaScore(dto.socialization2To3Years) +
        this.calculateAreaScore(dto.socialization3To4Years) +
        this.calculateAreaScore(dto.socialization4To5Years) +
        this.calculateAreaScore(dto.socialization5To6Years);

      const linguagem =
        this.calculateAreaScore(dto.language0To1Years) +
        this.calculateAreaScore(dto.language1To2Years) +
        this.calculateAreaScore(dto.language2To3Years) +
        this.calculateAreaScore(dto.language3To4Years) +
        this.calculateAreaScore(dto.language4To5Years) +
        this.calculateAreaScore(dto.language5To6Years);

      const cognicao =
        this.calculateAreaScore(dto.cognition0To1Year) +
        this.calculateAreaScore(dto.cognition1To2Years) +
        this.calculateAreaScore(dto.Cognition2To3YearsDto) +
        this.calculateAreaScore(dto.Cognition3To4YearsDto) +
        this.calculateAreaScore(dto.Cognition4To5YearsDto) +
        this.calculateAreaScore(dto.Cognition5To6YearsDto);

      const autoCuidado =
        this.calculateAreaScore(dto.SelfCare0To1YearDto) +
        this.calculateAreaScore(dto.SelfCare1To2YearsDto) +
        this.calculateAreaScore(dto.SelfCare2To3YearsDto) +
        this.calculateAreaScore(dto.SelfCare3To4YearsDto) +
        this.calculateAreaScore(dto.SelfCare4To5YearsDto) +
        this.calculateAreaScore(dto.SelfCare5To6YearsDto);

      const motor =
        this.calculateAreaScore(dto.MotorDevelopment0To1YearDto) +
        this.calculateAreaScore(dto.MotorDevelopment1To2YearsDto) +
        this.calculateAreaScore(dto.MotorDevelopment2To3YearsDto) +
        this.calculateAreaScore(dto.MotorDevelopment3To4YearsDto) +
        this.calculateAreaScore(dto.MotorDevelopment4To5YearsDto) +
        this.calculateAreaScore(dto.MotorDevelopment5To6YearsDto);

      // Criação da entidade para salvar no banco de dados
      const entityToCreate = {
        ...dto,
        socializacao,
        linguagem,
        cognicao,
        autoCuidado,
        motor,
      };

      const createdEntity = await this.portageGuidetoPreschoolEducationRepository.create(entityToCreate);

      // Retornando a entidade criada
      return createdEntity;

    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }


  async findAll(query: QueryPortageGuidetoDto) {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.findAll(query)
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
      try {
        return await this.portageGuidetoPreschoolEducationRepository.update(id, update);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }


  async delete(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
      try {
        return await this.portageGuidetoPreschoolEducationRepository.delete(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
}