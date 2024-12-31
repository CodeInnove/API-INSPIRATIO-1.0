export interface IIncomeTablesPartOne{
        recognizesAndIdentifiesLetters: string,
        recognizesAndIdentifiesNumbers: string,
        directedWriting: string,
        spontaneousWriting: string,
        readingAndWriting: string,
        readingAndComprehension: string,
        textProductionRecord: string,
        textualStructuring: string,
        oralTextProduction: string,
        numbersGreaterMagnitude: string,
        problemSolving: string,
   
}

export interface IIncomeTablesPartTwo {
        bodyScheme: string;
        sidePointing: string;
        position: string;
        direction: string;
        space: string;
        size: string;
        quantity: string;
        shape: string;
        visualDiscrimination: string;
        hearingDiscrimination: string;
        verbalizationOfWords: string;
        synthesisAnalysis: string;
        fineMotorCoordination: string;
    }


export interface IIncomeTable {
    patient: string,
    doctor: string,
    incomeTablesPartOne: IIncomeTablesPartOne,
    incomeTablesPartTwo: IIncomeTablesPartTwo,
}



