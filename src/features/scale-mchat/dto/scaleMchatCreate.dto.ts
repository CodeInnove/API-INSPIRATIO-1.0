import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';



  class QuestionsScaleMchatDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  childLikesToSwing: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  hasInterestInOtherChildren: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  likesToClimbOnThings: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  likesToPlayHideAndSeek: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  hasPlayedPretend: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  hasUsedIndexFingerToPointToAskForSomething: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  hasUsedIndexFingerToPointToIndicateInterest: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  canPlayCorrectlyWithSmallToys: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    hasBroughtObjectsToYouToShowThem: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  looksAtYouInTheEyesForMoreThanASecondOrTwo: boolean;

  @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  hasSeemedVerySensitiveToNoise: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  smilesInResponseToYourFacialExpressionsOrSmile: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  imitatesYou: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  respondsOrLooksWhenYouCallHerByName: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    doesChildFollowYourGazeWhenYouPoint: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  canWalk: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  looksAtThingsYouAreLookingAt: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
    makesStrangeMovementsNearHisFace: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  triesToAttractYourAttentionToHisActivity: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  haveYouEverWonderedIfYourChildIsDeaf: boolean;

  @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  understandsWhatPeopleSay: boolean;

  @ApiProperty()
  @IsNotEmpty()
    @IsBoolean()
  sometimesGetsSpaceyOrWalksWithoutDirection: boolean;

  @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
  looksAtYourFaceToCheckYourReactionWhenSeeingSomethingStrange: boolean;

  }
  export class CreateScaleMchatDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    patient: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    dataOfApplication: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    doctor: string;

    @ValidateNested()
    @Type(() => QuestionsScaleMchatDTO)
    @ApiProperty({ type: QuestionsScaleMchatDTO })
    QuestionsScaleMchat: QuestionsScaleMchatDTO;
  
  }