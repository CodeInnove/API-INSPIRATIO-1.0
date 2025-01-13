import { ApiProperty } from "@nestjs/swagger";

class LanialPosture{
    @ApiProperty()
    occlusionNormalOfLips: number;
    
    @ApiProperty()
    occlusionOfLipsWithTension: number;
    @ApiProperty()
    mildDysfunction: number;
    
    @ApiProperty()
    severeDysfunction: number;

}

class VerticalMandibularPostureScores{
    @ApiProperty()
    posturalNormal: number;
    @ApiProperty()
    occlusionOfTeeth: number;
    @ApiProperty()
    openMouth: number;
    @ApiProperty()
    excessiveMouthOpening: number;
}

class AppearanceOfCheeksScores{
    @ApiProperty()
    normal: number;
    @ApiProperty()
    increasedVolumeOrFlaccidArched: number;
    @ApiProperty()
    severe: number;
}

class AppearanceOfFaceScores{
    @ApiProperty()
    symmetryBetweenRightAndLeftSides: number;
    @ApiProperty()
    asymmetryLeve: number;
    @ApiProperty()
    severe: number;
    @ApiProperty()
    increasedSide: string;
}

class PositionOfTongue{
    @ApiProperty()
    containedInOralCavity: number;
    @ApiProperty()
    interposedToDentalArches: number;
    @ApiProperty()
    protudedInExcess: number;
}


class AppearanceOfHardPalate{
    @ApiProperty()
    normal: number;
    @ApiProperty()
    light: number;
    @ApiProperty()
    severe: number;
}
export class AppearanceAndPosturalDto {
    @ApiProperty()
    lanialPosture: LanialPosture
    @ApiProperty()
    verticalMandibularPostureScores: VerticalMandibularPostureScores
    @ApiProperty()
    appearanceOfCheeksScores: AppearanceOfCheeksScores
    @ApiProperty()
    appearanceOfFaceScores: AppearanceOfFaceScores
    @ApiProperty()
    positionOfTongue: PositionOfTongue
    @ApiProperty()
    appearanceOfHardPalate: AppearanceOfHardPalate
}