
export interface IIidentification {
    dateBirth: string;
    age: number;
    maritalStatus: string;
    sex: string;
    naturalization: string;
    nationality: string;
    schoolName: string;
    schoolPeriod: string;
    patient: string; // ObjectId as string
}
export interface IAffiliation {
    ageFather: number;
    FatherProfession: string;
    schooling: string;
    motherName: string;
    ageMother: number;
    MotherProfession: string;
    schoolingMother: string;
    brotherName: string;
    brotherAge: number;
    fatherName: string;
};
export interface IAddress {
    number: string;
    city: string;
    state: string;
    zipCode: string;
    fone: string;
    responsible: string;
    forwarded: string;
    dateAnamnese: Date;
    professional: string;
    street: string;
};


export interface IComplaintAndDuration {
    empty: string;
}
  
export interface IBackground {
      constitutional: {
          gestation: string;
          childbirth: string;
          complications: string;
          useMedications: string; // SIM ou NÃO
          medicalAdvice: string; // sob orientação medica?
          which: string;
          prenatal: string;
          why: string;
          problems: string; // pergunta SIM OU NAO
          whichProblem: string; // Qual problema..
      };
      circumstantial: {
          hoursWorkParents: string;
          responsibleChild: string; // Com quem a criança fica?
          weeklyRoutine: string;
      };
}
export interface IDevelopment {
      physical: {
          semantics: {
              sleep: string;
              illness: string;
              HearingInfection: string; // Audição/ Infecção de Ouvido (Otite)
              vision: string;
              allergy: string;
              Surgery: string; // Cirurgia e data
              hospitalization: string;
              medication: string;
              breastfed: string; // Amamentação / até quando?
              lookedAtMotherWhileBreastfeeding: string; // Olhava para mãe na Amamentação
              whatDoYouEatNow: string; // O que come atualmente?
              didyouChokeEasily: string; // Engasgava com facilidade?
              gastroesophagealReflux: string; // Refluxo gastroesofágico?
              didYouUseaBottle: string; // Usou mamadeira?
              whenDidYouStartUsingIt: string; // Quando começou a usar?
              whenDidYouSwitchFromLiquidToPastyFoods: string; // Quando mudou de alimentos líquidos para pastosos?
              softFoodsToSolids: string; // pastosos para sólidos?
              fever: string;
              fainting: string;
              seizures: string;
              otherProblema: string;
          };
      }// Additional fields for motor, neurovegetativeFunctions, Ideomotor, Ideatory...
  }
export interface ISocioCultural {
      interactive: {
          relationshipWithParents: string;
          relationshipWithAdults: string;
          relationshipWithChildren: string;
          bestFriends: string;
      };
      Integrative: {
          theyLike: string;
          pressuredSpeckCorrectly: string;
          familySpeechDifficulties: string;
          difficultyUnderstanding: string;
          eyeContact: string;
          biteChildrenAggressive: string;
          initiativeCommunication: string;
          maintainDialogue: string;
          contactWithThingsLike: string;
          dontLike: string;
          wellSchool: string;
          startSchool: string;
          adaptWell: string;
          howBehave: string;
          respondYourName: string;
          importantObservations: string;
      };
  };

export interface IGeneralAnamnese {
    identification: IIidentification;
    affiliation: IAffiliation;
    address: IAddress;
    complaintAndDuration: IComplaintAndDuration;
    background: IBackground;
    development: IDevelopment;
    socioCultural: ISocioCultural;
  }