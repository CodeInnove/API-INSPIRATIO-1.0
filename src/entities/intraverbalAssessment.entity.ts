
import { Schema, Document } from 'mongoose';
import { IIntraverbalAssessment } from 'src/features/intraverbal-assessment/types/intraverbalAssessment';

export const IntraverbalAssessmentSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    //dateOfApplication: { type: String, required: true },
    doctor: {type: Schema.Types.ObjectId, ref: "User"},
    group1: {
        theCatSays: {type: String, required: false},
        theFrogDoesntWashHisFeetHeDoesntWashBecauseHeDoesnt: {type: String, required: false},
        readyAim: {type: String, required: false},
        myLittleChickYellowFitsHereInMy: {type: String, required: false},
        cirandaCirandinhaLetUsAll: {type: String, required: false},
        theDogSays: {type: String, required: false},
        ithrewAStickAtThe: {type: String, required: false},
        theSpiderClimbedUpThe: {type: String, required: false},
        headShouldersKneesAnd: {type: String, required: false},
        happyBirthdayTo: {type: String, required: false},
        other1Group1: {type: String, required: false},
        other2Group1: {type: String, required: false},
        subtotalPointsGroup1: {type: Number, required: false}
    },
    group2: {
        whatIsYourName: {type: String, required: false},
        youBrushYour: {type: String, required: false},
        shoesAnd: {type: String, required: false},
        youRide: {type: String, required: false},
        afterUsingTheBathroomYouGive: {type: String, required: false},
        youSitOnA: {type: String, required: false},
        youEat: {type: String, required: false},
        oneTwo: {type: String, required: false},
        youWashYour: {type: String, required: false},
        youSleepInA: {type: String, required: false},
        other1Group2: {type: String, required: false},
        other2Group2: {type: String, required: false},
        subtotalPointsGroup2: {type: Number, required: false}
      },
      group3: {
        whatCanYouDrink: {type: String, required: false},
        whatCanFly: {type: String, required: false},
        whatNumbersDoYouKnow: {type: String, required: false},
        whatCanYouSing: {type: String, required: false},
        whatIsYourFavoriteMovie: {type: String, required: false},
        whatColorsDoYouKnow: {type: String, required: false},
        whatDoYouRead: {type: String, required: false},
        whatIsOutThere: {type: String, required: false},
        whatIsIntheKitchen: {type: String, required: false},
        whatAnimalsDoYouKnow: {type: String, required: false},
        other1Group3: {type: String, required: false},
        other2Group3: {type: String, required: false},
        subtotalPointsGroup3: {type: Number, required: false}
      },
      group4: {
        whoIsYourTeacher: {type: String, required: false},
        whereDoYouWashYourHands: {type: String, required: false},
        whoLivesOnTheFarm: {type: String, required: false},
        whereIsTheRefrigerator: {type: String, required: false},
        whoDrivesTheCar: {type: String, required: false},
        whereDoYouTakeABath: {type: String, required: false},
        howOldAreYou: {type: String, required: false},
        whereAreTheTrees: {type: String, required: false},
        whoDoYouSeeOnTV: {type: String, required: false},
        whyDoWeUseBandaid: {type: String, required: false},
        other1Group4: {type: String, required: false},
        other2Group4: {type: String, required: false},
        subtotalPointsGroup4: {type: Number, required: false}
      },
      group5: {
        whatIsTheShapeOfTheTire: {type: String, required: false},
        whatGrowsInTheGarden: {type: String, required: false},
        whatCanBiteYou: {type: String, required: false},
        whatDoYouDoWithASpoon: {type: String, required: false},
        whatCanYouPush: {type: String, required: false},
        whereDoYouFindWheels: {type: String, required: false},
        whatDoYouUseToSmell: {type: String, required: false},
        sayTheNameOfSomeClothes: {type: String, required: false},
        sayTheNameOfSomethingSharp: {type: String, required: false},
        whatIsTheColorOfTheTire: {type: String, required: false},
        other1Group5: {type: String, required: false},
        other2Group5: {type: String, required: false},
        subtotalPointsGroup5: {type: Number, required: false}
      },
      group6: {
        whatDoYouWearOnYourHead: {type: String, required: false},
        whatDoYouUseToEat: {type: String, required: false},
        whatAnimalWalksVerySlowly: {type: String, required: false},
        whatIsOnTopOfTheHouse: {type: String, required: false},
        whereDoYouWrite: {type: String, required: false},
        whatIsInsideTheHouse: {type: String, required: false},
        sayTheNameOfThingsThatAreHot: {type: String, required: false},
        whatGrowsOnYourHead: {type: String, required: false},
        whatIsUnderABoat: {type: String, required: false},
        whereDoYouEat: {type: String, required: false},
        other1Group6: {type: String, required: false},
        other2Group6: {type: String, required: false},
        subtotalPointsGroup6: {type: Number, required: false}
      },
      group7: {
        whatMakesYouSad: {type: String, required: false},
        whatAnimalHasAVeryLongNeck: {type: String, required: false},
        sayTheNameOfSomethingThatIsNotForEating: {type: String, required: false},
        whatHelpsAFlowerGrow: {type: String, required: false},
        whatCanYouNotWear: {type: String, required: false},
        whatDoYouDoWithMoney: {type: String, required: false},
        whatNumberIsBetween6And8: {type: String, required: false},
        whatIsInsideABalloon: {type: String, required: false},
        whatIsYourLastName: {type: String, required: false},
        sayTheNameOfSomethingSticky: {type: String, required: false},
        other1Group7: {type: String, required: false},
        other2Group7: {type: String, required: false},
        subtotalPointsGroup7: {type: Number, required: false}
      },
      group8: {
        whereDoYouPutDirtyClothes: {type: String, required: false},
        whatDoYouTakeToABirthday: {type: String, required: false},
        whatDayIsToday: {type: String, required: false},
        whatDoYouSeeInTheField: {type: String, required: false},
        whatDayComesBeforeTuesday: {type: String, required: false},
        whyDoPeopleWearGlasses: {type: String, required: false},
        whenDoYouSetTheTable: {type: String, required: false},
        whatDoesTheCarHaveThatIsDifferentFromABicycle: {type: String, required: false},
        howDoYouKnowIfSomeoneIsSick: {type: String, required: false},
        whatDidYouDoTodayAtSchool: {type: String, required: false},
        other1Group8: {type: String, required: false},
        other2Group8: {type: String, required: false},
        subtotalPointsGroup8: {type: Number, required: false}
      },

    //totalGroupIssuesWithMultipleParts2:{ type: Number}

});
          

export interface IIntraverbalAssessmentEntity extends Omit<IIntraverbalAssessment, '_id'>, Document {}