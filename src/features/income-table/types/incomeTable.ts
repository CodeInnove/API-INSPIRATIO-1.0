export interface IIncomeTablesPartOne{
        recognizesAndIdentifiesLetters: IIncomeTableResponse,
        recognizesAndIdentifiesNumbers: IIncomeTableResponse,
        directedWriting: IIncomeTableResponse,
        spontaneousWriting: IIncomeTableResponse,
        readingAndWriting: IIncomeTableResponse,
        readingAndComprehension: IIncomeTableResponse,
        textProductionRecord: IIncomeTableResponse,
        textualStructuring: IIncomeTableResponse,
        oralTextProduction: IIncomeTableResponse,
        numbersGreaterMagnitude: IIncomeTableResponse,
        problemSolving: IIncomeTableResponse,
   
}

export interface IIncomeTablesPartTwo {
        bodyScheme: IIncomeTableResponse;
        sidePointing: IIncomeTableResponse;
        position: IIncomeTableResponse;
        direction: IIncomeTableResponse;
        space: IIncomeTableResponse;
        size: IIncomeTableResponse;
        quantity: IIncomeTableResponse;
        shape: IIncomeTableResponse;
        visualDiscrimination: IIncomeTableResponse;
        hearingDiscrimination: IIncomeTableResponse;
        verbalizationOfWords: IIncomeTableResponse;
        synthesisAnalysis: IIncomeTableResponse;
        fineMotorCoordination: IIncomeTableResponse;
    }


export interface IIncomeTable {
    doctor: string,
    patient: string,
    speciality: string,
    incomeTablesPartOne: IIncomeTablesPartOne,
    incomeTablesPartTwo: IIncomeTablesPartTwo,
    
}

export interface IIncomeTableResponse {

    acquired: boolean,
    notAcquired: boolean,
    inDevelopment: boolean, 
}