export interface IIncomeTablesPartOne {
  recognizesAndIdentifiesLetters: ITable;
  recognizesAndIdentifiesNumbers: ITable;
  directedWriting: ITable;
  spontaneousWriting: ITable;
  readingAndWriting: ITable;
  readingAndComprehension: ITable;
  textProductionRecord: ITable;
  textualStructuring: ITable;
  oralTextProduction: ITable;
  numbersGreaterMagnitude: ITable;
  problemSolving: ITable;
}

export interface IIncomeTablesPartTwo {
  bodyScheme: ITable;
  sidePointing: ITable;
  position: ITable;
  direction: ITable;
  space: ITable;
  size: ITable;
  quantity: ITable;
  shape: ITable;
  visualDiscrimination: ITable;
  hearingDiscrimination: ITable;
  verbalizationOfWords: ITable;
  synthesisAnalysis: ITable;
  fineMotorCoordination: ITable;
}

export interface IIncomeTable {
  _id?: string;
  GroupA: IIncomeTablesPartOne;
  GroupB: IIncomeTablesPartTwo;
  patient: string;
  date: string | Date;
}

export interface ITable {
  no: string;
  inDevelopment: string;
  yes: string;
}
