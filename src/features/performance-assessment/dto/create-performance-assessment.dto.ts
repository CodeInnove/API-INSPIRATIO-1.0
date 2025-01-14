import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean } from "class-validator";

class IAssessment2a4Years {
    @ApiProperty()
    @IsBoolean()
    ei02cg01: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02cg02: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02cg03: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02cg04: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02cg05: Boolean 
}

class IAssessment5a6Years {
    @ApiProperty()
    @IsBoolean()
    ei03cg01: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03cg02: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03cg03: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03cg04: Boolean 

}


class ILinesSoundsColorsAndShapes2a4Years {
    @ApiProperty()
    @IsBoolean()
    ei02ts01: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ts02: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02ts03: Boolean
}

class ILinesSoundsColorsAndShapes5a6Years {
    @ApiProperty()
    @IsBoolean()
    ei03ts01: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ts02: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ts03: Boolean
}

class IListeningSpeakingThinkingAndImagining2a4Years {
    @ApiProperty()
    @IsBoolean()
    ei02ef01: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef02: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef03: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef04: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef05: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef06: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef07: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef08: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei02ef09: Boolean 
}

class IListeningSpeakingThinkingAndImagining5a6Years{
    @ApiProperty()
    @IsBoolean()
    ei03ef01: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef02: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef03: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef04: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef05: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef06: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef07: Boolean 

    @ApiProperty()
    @IsBoolean()
    ei03ef08: Boolean 


    @ApiProperty()
    @IsBoolean()
    ei03ef09: Boolean 
}

class ISpacesTimesQuantitiesRelationsAndTransformations2a4Years {

    @ApiProperty()
    @IsBoolean()
    ei02et01: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et02: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et03: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et04: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et05: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et06: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et07: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02et08: Boolean
}

class ISpacesTimesQuantitiesRelationsAndTransformations5a6Years{
    @ApiProperty()
    @IsBoolean()
    ei03et01: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et02: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et03: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et04: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et05: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et06: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et07: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03et08: Boolean
}

class ITheMeTheOtherAndTheUs2a4Years {

    @ApiProperty()
    @IsBoolean()
    ei02eo01: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02eo02: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02eo03: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02eo04: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02eo05: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02eo06: Boolean

    @ApiProperty()
    @IsBoolean()
    ei02eo07: Boolean
}

class ITheMeTheOtherAndTheUs5a6Years {

    @ApiProperty()
    @IsBoolean()
    ei03eo01: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03eo02: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03eo03: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03eo04: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03eo05: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03eo06: Boolean

    @ApiProperty()
    @IsBoolean()
    ei03eo07: Boolean
}

class ISummaryOfLearningTheSelfTheOtherAndTheUs {
    @ApiProperty()
    @IsBoolean()
    respectemotions:  Boolean 

    @ApiProperty()
    @IsBoolean()
    actingroup: Boolean 

    @ApiProperty()
    @IsBoolean()
    knowsocialrules:  Boolean
}

class ISummaryOfLearningBodyGesturesAndMovements {

    @ApiProperty()
    @IsBoolean()
    careforhealth: Boolean 

    @ApiProperty()
    @IsBoolean()
    autonomyinhygiene: Boolean

    @ApiProperty()
    @IsBoolean()
    usebodyintentionally: Boolean

    @ApiProperty()
    @IsBoolean()
    coordinatemanualskills: Boolean
}

class ISummaryOfLearningLinesSoundsColorsAndShapes {

    @ApiProperty()
    @IsBoolean()
    discriminatesounds: Boolean

    @ApiProperty()
    @IsBoolean()
    expressvisually: Boolean

    @ApiProperty()
    @IsBoolean()
    relatewithother: Boolean
}

class ISummaryOfLearningListeningSpeakingThinkingAndImagining {
    @ApiProperty()
    @IsBoolean()
    expressideas:Boolean

    @ApiProperty()
    @IsBoolean()
    argumentandreport: Boolean

    @ApiProperty()
    @IsBoolean()
    listenunderstand: Boolean 

    @ApiProperty()
    @IsBoolean()
    knowdifferenttext: Boolean 
}

class ISummaryOfLearningSpacesTimesQuantitiesRelationsAndTransformations {

    @ApiProperty()
    @IsBoolean()
    identifyandcompare: Boolean

    @ApiProperty()
    @IsBoolean()
    interactwithenviroment: Boolean

    @ApiProperty()
    @IsBoolean()
    usevocabulary: Boolean

    @ApiProperty()
    @IsBoolean()
    useunitsofmeasure: Boolean

    @ApiProperty()
    @IsBoolean()
    identifyandregister: Boolean
}

class IPortugueseLanguage1year {

    @ApiProperty()
    @IsBoolean()
    ef01lp04: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01lp05: Boolean


    @ApiProperty()
    @IsBoolean()
    ef01lp11: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01lp13: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01lp02: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01lp01: Boolean
}

class IMath1Year {
    @ApiProperty()
    @IsBoolean()
    ef01ma01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01ma02: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01ma04: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01ma06: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01ma15: Boolean

    @ApiProperty()
    @IsBoolean()
    ef01ma21: Boolean
}

class IPortugueseLanguage2years {
    @ApiProperty()
    @IsBoolean()
    ef02lp02: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02lp04: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02lp07: Boolean

    @ApiProperty()
    @IsBoolean()
    ef12lp19: Boolean

    @ApiProperty()
    @IsBoolean()
    ef12lp01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef12lp04: Boolean
}

class IMath2Years {
    @ApiProperty()
    @IsBoolean()
    ef02ma01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02ma03: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02ma04: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02ma05: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02ma06: Boolean

    @ApiProperty()
    @IsBoolean()
    ef02ma09: Boolean
}

class IPortugueseLanguage3years {

    @ApiProperty()
    @IsBoolean()
    ef03lp02: Boolean

    @ApiProperty()
    @IsBoolean()
    ef03lp05: Boolean

    @ApiProperty()
    @IsBoolean()
    ef35lp07: Boolean

    @ApiProperty()
    @IsBoolean()
    ef35lp12: Boolean

    @ApiProperty()
    @IsBoolean()
    ef35lp27: Boolean
}

class IMath3Years  {

    @ApiProperty()
    @IsBoolean()
    ef03ma01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef03ma03: Boolean

    @ApiProperty()
    @IsBoolean()
    ef03ma06: Boolean

    @ApiProperty()
    @IsBoolean()
    ef03ma07: Boolean

    @ApiProperty()
    @IsBoolean()
    ef03ma13: Boolean

    @ApiProperty()
    @IsBoolean()
    ef03ma23: Boolean
}

class IPortugueseLanguage4years {
    @ApiProperty()
    @IsBoolean()
    ef04lp01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04lp05: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04lp21: Boolean

    @ApiProperty()
    @IsBoolean()
    ef35lp12_4: Boolean

    @ApiProperty()
    @IsBoolean()
    ef35lp29: Boolean
}

class IMath4Years  {

    @ApiProperty()
    @IsBoolean()
    ef04ma01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04ma02: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04ma03: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04ma04: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04ma15: Boolean

    @ApiProperty()
    @IsBoolean()
    ef04ma22: Boolean
}

class IPortugueseLanguage5years {
    @ApiProperty()
    @IsBoolean()
    ef05lp01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05lp03: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05lp04: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05lp26: Boolean

    @ApiProperty()
    @IsBoolean()
    ef15lp12: Boolean

    @ApiProperty()
    @IsBoolean()
    ef35lp12_5: Boolean
} 

class Imath5Years {

    @ApiProperty()
    @IsBoolean()
    ef05ma01: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05ma02: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05ma07: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05ma08: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05ma10: Boolean

    @ApiProperty()
    @IsBoolean()
    ef05ma13: Boolean
}


export class CreatePerformanceAssessmentDto {
    @ApiProperty()
    patient: string
    @ApiProperty()
    doctor: string
    @ApiProperty()
    pencilGrip: string
    @ApiProperty()
    writtenHypothesis: string
    @ApiProperty()
    writingWordsAndPhrases: string
    @ApiProperty()
    reading: string
    @ApiProperty()
    numbersAndQuantity: string
    @ApiProperty()
    mathematicalOperations: string
    @ApiProperty()
    executiveFunctions: string
    @ApiProperty()
    assessment2a4Years: IAssessment2a4Years
    @ApiProperty()
    assessment5a6Years: IAssessment5a6Years
    @ApiProperty()
    linesSoundsColorsAndShapes2a4Years: ILinesSoundsColorsAndShapes2a4Years
    @ApiProperty()
    linesSoundsColorsAndShapes5a6Years: ILinesSoundsColorsAndShapes5a6Years

    @ApiProperty()
    IListeningSpeakingThinkingAndImagining2a4Years: IListeningSpeakingThinkingAndImagining2a4Years
    @ApiProperty()
    IListeningSpeakingThinkingAndImagining5a6Years: IListeningSpeakingThinkingAndImagining5a6Years
    @ApiProperty()
    spacesTimesQuantitiesRelationsAndTransformations2a4Years:ISpacesTimesQuantitiesRelationsAndTransformations2a4Years
    @ApiProperty()
    spacesTimesQuantitiesRelationsAndTransformations5a6Years:ISpacesTimesQuantitiesRelationsAndTransformations5a6Years
    @ApiProperty()
    theMeTheOtherAndTheUs2a4Years: ITheMeTheOtherAndTheUs2a4Years
    @ApiProperty()
    theMeTheOtherAndTheUs5a6Years: ITheMeTheOtherAndTheUs5a6Years
    @ApiProperty()
    summaryOfLearningTheSelfTheOtherAndTheUs: ISummaryOfLearningTheSelfTheOtherAndTheUs
    @ApiProperty()
    summaryOfLearningBodyGesturesAndMovements: ISummaryOfLearningBodyGesturesAndMovements
    @ApiProperty()
    summaryOfLearningLinesSoundsColorsAndShapes: ISummaryOfLearningLinesSoundsColorsAndShapes
    @ApiProperty()
    summaryOfLearningListeningSpeakingThinkingAndImagining: ISummaryOfLearningListeningSpeakingThinkingAndImagining
    @ApiProperty()
    summaryOfLearningSpacesTimesQuantitiesRelationsAndTransformations: ISummaryOfLearningSpacesTimesQuantitiesRelationsAndTransformations
    @ApiProperty()
    portugueseLanguage1year: IPortugueseLanguage1year
    @ApiProperty()
    math1Year: IMath1Year
    @ApiProperty()
    portugueseLanguage2a4Years: IPortugueseLanguage2years
    @ApiProperty()
    math2a4Years: IMath2Years
    @ApiProperty()
    portugueseLanguage4a5Years: IPortugueseLanguage3years
    @ApiProperty()
    math3Years: IMath3Years
    @ApiProperty()
    portugueseLanguage4years: IPortugueseLanguage4years
    @ApiProperty()
    math4Years: IMath4Years
    @ApiProperty()
    portugueseLanguage5years: IPortugueseLanguage5years
    @ApiProperty()
    math5Years: Imath5Years

}

