import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChooseAnamnesisSpeechTherapyDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionYes: string;
    

    @IsNotEmpty()
    @ApiProperty()
    optionNo: string;
  }

class AnswerAnamnesisSpeechTherapyDTO {
    @IsNotEmpty()
    @ApiProperty()
    answerInWriting: string;
  }

class IdentificationDTO {

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        dateBirth: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        age: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        maritalStatus: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        sex: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        naturalization: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        nationality: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        schoolName: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        schoolPeriod: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        fatherName: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        ageFather: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        fatherProfession: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        schooling: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        motherName: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        ageMother: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        MotherProfession: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        schoolingMother: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        brotherName: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        brotherAge: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        street: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        number: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        city: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        state: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        zipCode: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        fone: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        responsible: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        forwarded: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        dateAnamnese: AnswerAnamnesisSpeechTherapyDTO;

        @ValidateNested()
        @Type(() => AnswerAnamnesisSpeechTherapyDTO)
        @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
        professional: AnswerAnamnesisSpeechTherapyDTO;
    }

class ComplaintAndDurationDTO {

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    observationComplaintAndDuration: AnswerAnamnesisSpeechTherapyDTO;
    }

class BackgroundDTO{

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionGestation: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionTypeOfDelivery: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionComplications: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionHasUsedAnyMedication: ChooseAnamnesisSpeechTherapyDTO

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionUnderMedicalAdvice: ChooseAnamnesisSpeechTherapyDTO

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhichMedicine: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDidYouHavePrenatalCare: ChooseAnamnesisSpeechTherapyDTO

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhy: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDidTheChildHaveAnyProblems: ChooseAnamnesisSpeechTherapyDTO

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhatProblem: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionParentsWorkingHours: ChooseAnamnesisSpeechTherapyDTO

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhoDoesTheChildStayWith: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWeeklyRoutine: AnswerAnamnesisSpeechTherapyDTO;
    };


class DevelopmentDTO{

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSleep: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSickness: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionHearingAndEarInfection: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionVision: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionAllergy: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSurgery: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDateOfSurgery: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionHospitalization: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDrug: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionBreastfed: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhenUntil: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionLookedAtMyMotherInBreastfeeding: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhatDoYouCurrentlyEat: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDidYouChokeEasily: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionGastroesophagealReflux: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDidYouUseABottle: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhenDidYouStartUsingIt: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionForHowLong: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhenDidYouSwitchFromLiquidToPastyFoods: AnswerAnamnesisSpeechTherapyDTO;
    
    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionPastyToSolid: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionFever: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionFainting: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSeizures: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionOtherProblems: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionHeHeldHisHead: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionSatWithSupport: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionSatWithoutSupport: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionCrawled: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionBeen: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDaytimeSphincterControl: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionNightSphincterControl: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionFallALot: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDidYouBumpIntoEverything: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionSpeechBabbling: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhen: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionWasItAQuietBaby: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSuction: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionMastication: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSwallowing: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionRespiration: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDoesItHaveNoise: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionEffort: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionLeftHandedOrRightHanded: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionUsed: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionUntilWhen: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionOtherHabits: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoYouShowerAlone: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDoYouEatAlone: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionSinceWhen: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhatDoYouUse: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWithWhatHand: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDoYouPlayBall: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionJumpRope: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDoYouBrushYourTeethAlone: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDoYouDressAlone: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionDoYouPutOnYourShoes: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionLaceUpYourSneakers: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => ChooseAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: ChooseAnamnesisSpeechTherapyDTO })
    questionZipUp: ChooseAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDodYouHaveYourOwnInitiative: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoesItShowWill: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhatDoYouDoWhenYoureAlone: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionHowDoesItSolveProblems: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionRelationshipWithParents: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionRelationshipWithAdults: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionRelationshipWithOtherChildren: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhoAreYourBestFriends: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhatDoYouLike: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionAreYouVeryDemandingToSayRight: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionFamilyWithSpeechImpairment: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionIsThereDifficultyInUnderstandingDoesHeUnderstandWhatYouSay: AnswerAnamnesisSpeechTherapyDTO;
    
    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoesItHaveEyeContact: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionIsBitingOtherChildrenAggressive: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoYouHaveACommunicationInitiative: AnswerAnamnesisSpeechTherapyDTO;
    
    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoYouMaintainDialogue: AnswerAnamnesisSpeechTherapyDTO;
    
    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoYouHaveContactWithSomethingYouLike: AnswerAnamnesisSpeechTherapyDTO;
    
    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionAndWhatDoesntHeLike: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoYouPerformWellAtSchool: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionWhenDidYouEnterSchool: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDidYouHaveAGoodAdaptation: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionHowIsTheirBehavior: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    questionDoYouGoByName: AnswerAnamnesisSpeechTherapyDTO;

    @ValidateNested()
    @Type(() => AnswerAnamnesisSpeechTherapyDTO)
    @ApiProperty({ type: AnswerAnamnesisSpeechTherapyDTO })
    observationIntegrative: AnswerAnamnesisSpeechTherapyDTO;

    }

export class CreateAnamnesisSpeechTherapyDto {
    @ValidateNested()
    @Type(() => IdentificationDTO)
    @ApiProperty({ type: IdentificationDTO })
    Identification: IdentificationDTO;
    
    @ValidateNested()
    @Type(() => ComplaintAndDurationDTO)
    @ApiProperty({ type: ComplaintAndDurationDTO })
    ComplaintAndDuration: ComplaintAndDurationDTO;

    @ValidateNested()
    @Type(() => ComplaintAndDurationDTO)
    @ApiProperty({ type: ComplaintAndDurationDTO })
    ComplaintAndDuratio: ComplaintAndDurationDTO;

    @ValidateNested()
    @Type(() => BackgroundDTO)
    @ApiProperty({ type: BackgroundDTO })
    Background: BackgroundDTO;
  

    @ValidateNested()
    @Type(() => DevelopmentDTO)
    @ApiProperty({ type: DevelopmentDTO })
    Development: DevelopmentDTO;
    }