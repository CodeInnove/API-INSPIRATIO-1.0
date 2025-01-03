export interface IScaleASRS{
  patient: string;
  dateOfApplication: string;
  doctor: string;
        
  GroupA:{
      questionOne: number;
      questionTwo: number;
      questionThree: number;
      questionFour: number;
      questionFive: number;
      questionSix: number;
      questionSeven: number;
      questionEight: number;
    //totalGroupA:{resultGroupA: number;};
  }
  GroupB:{
      questionOne: number,
      questionTwo: number,
      questionThree: number,
      questionFour: number,
      questionFive: number,
      questionSix: number,
      questionSeven: number,

      questionEight: number,
      //totalGroupB:{resultGroupB: number;};
    }
}