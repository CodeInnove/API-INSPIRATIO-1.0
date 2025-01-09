import { IDataCollection } from './dataCollection'
import { LevelFour } from './levelFour'
import { LevelOne } from './levelOne'
import { LevelThree } from './levelThree'
import { LevelTwo } from './levelTwo'

export interface IChecklistDenver {
    dataCollection: IDataCollection
    createTableOne: LevelOne
    createTableTwo: LevelTwo
    createTableThree: LevelThree
    createTableFour: LevelFour
}

