export class ISwalQOL{
    nameParentOrId: string;
    relationshipWithChild: string;
    date: Date;
    nameOrId: string;
    gender: 'M' | 'F';
    ageYears: number;
    ageMonths: number;
    behaviorComments: string;
}

export enum Ethnicity {
    AMERICAN_INDIAN_ALASKA_NATIVE = 'American Indian/Alaska Native',
    ASIAN = 'Asian',
    BLACK_AFRICAN_AMERICAN = 'Black/African American',
    HISPANIC_LATINO = 'Hispanic/Latino',
    NATIVE_HAWAIIAN_PACIFIC_ISLANDER = 'Native Hawaiian/Pacific Islander',
    WHITE = 'White',
    OTHER = 'Other',
  }
export class IGeneralSwalQOL{
	dealingWithMySwallowingProblemIsHard: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	mySwallowingProblemIsTheBiggestDisruptionInMyLife: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	scoreGeneral: number;
}

export class IEatingSwalQOL{
	iDontCareIfIEatOrNot: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	imRarelyHungry: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	eatingDoesntBringMePleasure: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	scoreEating: number;
}

export class IEatingTimeSwalQOL{
	itakeTooLongToFinishAMeal: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	ieatSlowerThanOthers: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	scoreEatingTime: number;
}

export class IPhysicalIssuesSwalQOL{
	coughing: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	chokingOnFood: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	chokingOnLiquids: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	thickSalivaOrSecretions: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	vomiting: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	nausea: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	chewingDifficulties: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	excessSaliva: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	throatClearing: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	foodStuckInThroatOurMouth: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	foodOrDrinkSpillsFromMouthOurNose: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	scorePhysicalIssues: number;
}

export class IFoodChoicesSwalQOL{
	knowingWhatICanEatIsAProblem: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	itsHardToFindFoodILikeAndCanEat: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	scoreFoodChoices: number;
}

export class ICommunicationSwalQOL{
	peopleHaveTroubleUnderstandingMe: 'Todas as vezes' | 'Maior parte das vezes' | 'Algumas vezes' | 'Poucas vezes' | 'Nenhuma vez'
	itsHardToCommunicateClearly: 'Todas as vezes' | 'Maior parte das vezes' | 'Algumas vezes' | 'Poucas vezes' | 'Nenhuma vez'
	scoreCommunication: number;
}

export class IConcernsSwalQOL{
	fearOfChokingWhileEating: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	worriedAboutGettingPneumonia: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	fearOfChokingOnLiquids: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	hardToPredictChoking: 'Sempre' | 'Frequentemente' | 'Algumas vezes' | 'Dificilmente' | 'Nunca'
	scoreConcerns: number;
}

export class IEmotionsSwalQOL{
	mySwallowingProblemMakesMeFeelDown: 'Quase sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	beingCarefulWhileEatingFrustratesMe: 'Quase sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	iFeelDiscouragedAboutMySwallowingProblem: 'Quase sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	itMakesMeImpatient: 'Quase sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um pouco' | 'Nunca'
	scoreEmotions: number;
}

export class ISocialLifeSwalQOL{
	iAvoidGoingOutToEat: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	mySwallowingProblemMakesSocializingHard: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	workOurLeisureActivitiesHaveChanged: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	socialEventsAndVacationsArentEnjoyable: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	myRoleWithFamilyAndFriendsHasChanged: 'Concordo totalmente' | 'Concordo parcialmente' | 'Não sei' | 'Discordo parcialmente' | 'Discordo totalmente'
	scoreSocial: number;
}

export class IPhysicalSymptomsSwalQOL{
	feelingWeak: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um Pouco' | 'Nunca'
	feelingTired: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um Pouco' | 'Nunca'
	feelingExhausted: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um Pouco' | 'Nunca'
	scorePhysical: number;
}

export class ISleepIssuesSwalQOL{
	troubleSleeping: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um Pouco' | 'Nunca'
	wakingUpDuringTheNight: 'Sempre' | 'Muitas vezes' | 'Algumas vezes' | 'Um Pouco' | 'Nunca'
	scoreSleep: number;
}
export class IScoreGlobalSwalQOL{
    GlobalScore: number;
}

export class IGeneralQuestionsSwalQOL{
    doYouEatOrDrinkThroughAFeedingTube: 'Sim' | 'Não'
    typeOfFood: string;
    circleTheLetterThatMatchesYourFoodTextureThisWeek: 'A' | 'B' | 'C' | 'D' | 'E' 
    circleTheLetterThatMatchesYourLiquidTextureThisWeek: 'A' | 'B' | 'C' | 'D' | 'E' 
    rateYourHealth: 'Ruim' | 'Satisfatória' | 'Boa' | 'Muito Boa' | 'Excelente'
    didSomeoneHelpYouAnswer: 'Não, respondi sozinho' | 'Sim, alguém me ajudou responder'
    howDidTheyHelp: '1' | '2' | '3'
}