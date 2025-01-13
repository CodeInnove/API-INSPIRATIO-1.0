import { ApiProperty } from '@nestjs/swagger';
import { AppearanceAndPosturalDto } from './create-amiofeIAppearanceAndPostural';
import { ICreateAmiofeFunctions } from './create-amiofeFunctions';


 class CreateResponseMobilityLips {
  @ApiProperty()
  protrusion: number;
  @ApiProperty()
  retraction: number;
    @ApiProperty()
  lateralityD: number;
    @ApiProperty()
  lateralityE: number;
  @ApiProperty()
  scoreLips: number;
}

class CreateResponseMobilityLanguage {
    @ApiProperty()
    protrude: number;

    @ApiProperty()
    retract: number;

    @ApiProperty()
    lateralD: number;

    @ApiProperty()
    lateralE: number;

    @ApiProperty()
    elevate: number;

    @ApiProperty()
    lower: number;

    @ApiProperty()
    scoreLanguage: number;
  }
  
  class CreateResponseMobilityJaw {
    @ApiProperty()
    lower: number;

    @ApiProperty()
    elevate: number;

    @ApiProperty()
    lateralD: number;

    @ApiProperty()
    lateralE: number;

    @ApiProperty()
    protrude: number;

    @ApiProperty()
    scoreJaw: number;
  }
  
  class CreateResponseMobilityCheeks {
    @ApiProperty()
    inflate: number;

    @ApiProperty()
    suck: number;

    @ApiProperty()
    retract: number;

    @ApiProperty()
    lateralizeAir: number;
  }

export class MobilityDto {
    @ApiProperty()
    LabialMovements: CreateResponseMobilityLips
    @ApiProperty()
    performanceMovementsOfTheTongue: CreateResponseMobilityLanguage
    @ApiProperty()
    performanceMandibularMovements: CreateResponseMobilityJaw
    @ApiProperty()
    performanceCheeksMovements: CreateResponseMobilityCheeks
}
    


class Opening {
    @ApiProperty()
    detour: string
    @ApiProperty()
    pain: string
}

class Closing {
    @ApiProperty()
    detour: string
    @ApiProperty()
    pain: string
}

class Measures {
    @ApiProperty()
    trespassVertical: number
    @ApiProperty()
    interincisalDistance: number
    @ApiProperty()
    total: number
};
  export class FunctionalAnalysisOfOcclusionDto {
    @ApiProperty()
    opening: Opening
    @ApiProperty()
    closing: Closing
    @ApiProperty()
    measures: Measures
}

export class LateralityDto {
    @ApiProperty()
    pain: string;
    @ApiProperty()
    guide: string;
    @ApiProperty()
    work: string;
    @ApiProperty()
    balance: string;
    @ApiProperty()
    measure: number;
}

export class ProtrusionDto {
    @ApiProperty()
    pain: string;
    @ApiProperty()
    detour: string;
     @ApiProperty()
    oclusal: string;
    @ApiProperty()
    trespass: number;
    @ApiProperty()
    distance: number;
    @ApiProperty()
    total: number;
}

export class NoiseDto {
    @ApiProperty()
    opening: string;
     @ApiProperty()
    closing: string;
    @ApiProperty()
    protrusion: string;
    @ApiProperty()
    rightLaterality: string;
    @ApiProperty()
    leftLaterality: string;
}

export class CreateAmiofeDto {

    @ApiProperty()
    patient: String;

    @ApiProperty()
    doctor: String;

    @ApiProperty()
    date: String 
    
    @ApiProperty()
    apparanceAndPostura: AppearanceAndPosturalDto

    @ApiProperty()
    mobility: MobilityDto

    @ApiProperty()
    functions: ICreateAmiofeFunctions

    @ApiProperty()
    functionalAnalysisOfOcclusion: FunctionalAnalysisOfOcclusionDto

    @ApiProperty()
    laterality: LateralityDto

    @ApiProperty()
    protrusion: ProtrusionDto

    @ApiProperty()
    noise: NoiseDto

}