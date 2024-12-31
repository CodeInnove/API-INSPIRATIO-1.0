import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class Group1 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    theCatSays: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    theFrogDoesntWashHisFeetHeDoesntWashBecauseHeDoesnt: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    readyAim: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    myLittleChickYellowFitsHereInMy: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    cirandaCirandinhaLetUsAll: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    theDogSays: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    ithrewAStickAtThe: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    theSpiderClimbedUpThe: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    headShouldersKneesAnd: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    happyBirthdayTo: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group1: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group1: string;
  
    
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup1: Number;
  }
  
  export class Group2 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsYourName: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    youBrushYour: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    shoesAnd: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    youRide: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    afterUsingTheBathroomYouGive: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    youSitOnA: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    youEat: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    oneTwo: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    youWashYour: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    youSleepInA: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group2: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group2: string;
  

    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup2: Number;
  }
  
  export class Group3 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatCanYouDrink: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatCanFly: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatNumbersDoYouKnow: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatCanYouSing: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsYourFavoriteMovie: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatColorsDoYouKnow: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouRead: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsOutThere: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsIntheKitchen: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatAnimalsDoYouKnow: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group3: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group3: string;
  
    
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup3: Number;
  }
  
  export class Group4 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whoIsYourTeacher: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereDoYouWashYourHands: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whoLivesOnTheFarm: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereIsTheRefrigerator: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whoDrivesTheCar: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereDoYouTakeABath: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    howOldAreYou: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereAreTheTrees: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whoDoYouSeeOnTV: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whyDoWeUseBandaid: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group4: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group4: string;
  
    
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup4: Number;
  }
  
  export class Group5 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsTheShapeOfTheTire: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatGrowsInTheGarden: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatCanBiteYou: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouDoWithASpoon: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatCanYouPush: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereDoYouFindWheels: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouUseToSmell: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    sayTheNameOfSomeClothes: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    sayTheNameOfSomethingSharp: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsTheColorOfTheTire: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group5: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group5: string;
  
    
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup5: Number;
  }
  
  export class Group6 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouWearOnYourHead: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouUseToEat: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatAnimalWalksVerySlowly: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsOnTopOfTheHouse: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereDoYouWrite: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsInsideTheHouse: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    sayTheNameOfThingsThatAreHot: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatGrowsOnYourHead: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsUnderABoat: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereDoYouEat: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group6: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group6: string;
  
    
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup6: Number;
  }
  
  export class Group7 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatMakesYouSad: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatAnimalHasAVeryLongNeck: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    sayTheNameOfSomethingThatIsNotForEating: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatHelpsAFlowerGrow: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatCanYouNotWear: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouDoWithMoney: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatNumberIsBetween6And8: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsInsideABalloon: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatIsYourLastName: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    sayTheNameOfSomethingSticky: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group7: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group7: string;
  
   
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup7: Number;
  }

  export class Group8 {
    @IsString()
    @IsOptional()
    @ApiProperty()
    whereDoYouPutDirtyClothes: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouTakeToABirthday: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDayIsToday: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoYouSeeInTheField: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDayComesBeforeTuesday: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whyDoPeopleWearGlasses: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whenDoYouSetTheTable: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDoesTheCarHaveThatIsDifferentFromABicycle: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    howDoYouKnowIfSomeoneIsSick: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    whatDidYouDoTodayAtSchool: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other1Group8: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    other2Group8: string;
  
    @IsOptional()
    @ApiProperty()
    subtotalPointsGroup8: Number;
  }

export class CreateIntraverbalAssessmentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    patient: string;

    /*@IsDateString()
    @IsNotEmpty()
    @ApiProperty()   
    dataOfApplication: string | Date;*/

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    doctor: string;
    @ValidateNested()
    @Type(() => Group1)
    @ApiProperty({ type: Group1})
    group1: Group1;

    @ValidateNested()
    @Type(() => Group2)
    @ApiProperty({ type: Group2 })
    group2: Group2;

    @ValidateNested()
    @Type(() => Group3)
    @ApiProperty({ type: Group3 })
    group3: Group3;

    @ValidateNested()
    @Type(() => Group4)
    @ApiProperty({ type: Group4 })
    group4: Group4;

    @ValidateNested()
    @Type(() => Group5)
    @ApiProperty({ type: Group5 })
    group5: Group5;

    @ValidateNested()
    @Type(() => Group6)
    @ApiProperty({ type: Group6 })
    group6: Group6;

    @ValidateNested()
    @Type(() => Group7)
    @ApiProperty({ type: Group7 })
    group7: Group7;

    @ValidateNested()
    @Type(() => Group8)
    @ApiProperty({ type: Group8 })
    group8: Group8;

}
