
export interface IGeneralAnamnese {
  identification: {
      patient: string; // ObjectId as string
      dateBirth: string;
      age: number;
      maritalStatus: string;
      sex: string;
      naturalization: string;
      nationality: string;
      schoolName: string;
      schoolPeriod: string;
      affiliation: {
          fatherName: string;
          ageFather: number;
          FatherProfession: string;
          schooling: string;
          motherName: string;
          ageMother: number;
          MotherProfession: string;
          schoolingMother: string;
          brotherName: string;
          brotherAge: number;
      };
      address: {
          street: string;
          number: string;
          city: string;
          state: string;
          zipCode: string;
          fone: string;
          responsible: string;
          forwarded: string;
          dateAnamnese: Date;
          professional: string;
      };
  };
  complaintAndDuration: {
      empty: string;
  };
  background: {
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
  };
  development: {
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
      };
      // Additional fields for motor, neurovegetativeFunctions, Ideomotor, Ideatory...
  };
  socioCultural: {
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
      };
  };
  importantObservations: string;
}