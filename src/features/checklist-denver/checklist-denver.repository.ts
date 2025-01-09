import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IChecklistDenverEntity } from "src/entities/checklist-denver.entity";
import { CreateChecklistDenverDto } from "./dto/create-checklist-denver.dto";
import { UpdateChecklistDenverDto } from "./dto/update-checklist-denver.dto";

@Injectable()
export class ChecklistDenverRepository {
  constructor(
    @InjectModel('checklistDenver') private readonly denverModel: Model<IChecklistDenverEntity>
  ) {}

  async create(data: CreateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    return await this.denverModel.create(data);
  }

  async findAll(): Promise<IChecklistDenverEntity[]> {
    return await this.denverModel.find().exec();
  }

  async findOne(id: string): Promise<IChecklistDenverEntity> {
    return await this.denverModel.findById(id).exec();
  }

  async update(id: string, data: UpdateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    return await this.denverModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IChecklistDenverEntity> {
    return await this.denverModel.findByIdAndDelete(id).exec();
  }
}


/*async createGraph(createGraphDto: CreateGraphDto): Promise<Graph> {
    const { level, ability, answers } = createGraphDto;

    const acquiredCount = Object.values(answers).filter(answer => answer === 'adquirido').length;
    const notAcquiredCount = Object.values(answers).filter(answer => answer === 'não adquirido').length;
    const partialCount = Object.values(answers).filter(answer => answer === 'parcial').length;

    const totalAnswers = Object.values(answers).length;

    const acquiredPercentage = totalAnswers > 0 ? (acquiredCount / totalAnswers) * 100 : 0;
    const notAcquiredPercentage = totalAnswers > 0 ? (notAcquiredCount / totalAnswers) * 100 : 0;
    const partialPercentage = totalAnswers > 0 ? (partialCount / totalAnswers) * 100 : 0;

    const graph = this.graphRepository.create({
        level,
        ability,
        answers,
        acquiredCount,
        notAcquiredCount,
        partialCount,
        acquiredPercentage,
        notAcquiredPercentage,
        partialPercentage
    });
    return this.graphRepository.save(graph);
  }

  async findGraphByLevelAndAbility(level: Level, ability: Ability): Promise<Graph | undefined> {
    return this.graphRepository.findOne({ where: { level, ability } });
  }

  async updateGraph(id: number, updateGraphDto: UpdateGraphDto): Promise<Graph | undefined> {
        const existingGraph = await this.graphRepository.findOneBy({ id });
        if (!existingGraph) {
          return undefined;
        }

        const { level, ability, answers } = updateGraphDto;
    
        const acquiredCount = answers ? Object.values(answers).filter(answer => answer === 'adquirido').length : existingGraph.acquiredCount;
        const notAcquiredCount = answers ? Object.values(answers).filter(answer => answer === 'não adquirido').length : existingGraph.notAcquiredCount;
        const partialCount = answers ? Object.values(answers).filter(answer => answer === 'parcial').length : existingGraph.partialCount;
    
        const totalAnswers = answers ? Object.values(answers).length : Object.values(existingGraph.answers).length;
    
        const acquiredPercentage = totalAnswers > 0 ? (acquiredCount / totalAnswers) * 100 : 0;
        const notAcquiredPercentage = totalAnswers > 0 ? (notAcquiredCount / totalAnswers) * 100 : 0;
        const partialPercentage = totalAnswers > 0 ? (partialCount / totalAnswers) * 100 : 0;
    
        const updatedGraph = {
            ...existingGraph,
            level: level !== undefined ? level : existingGraph.level,
            ability: ability !== undefined ? ability : existingGraph.ability,
            answers: answers !== undefined ? answers : existingGraph.answers,
            acquiredCount,
            notAcquiredCount,
            partialCount,
            acquiredPercentage,
            notAcquiredPercentage,
            partialPercentage
        }

        return this.graphRepository.save(updatedGraph);
  }*/