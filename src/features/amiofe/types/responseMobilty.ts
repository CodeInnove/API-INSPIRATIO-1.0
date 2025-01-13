export interface CreateResponseMobilityLips{
    protrusion: number
    retraction: number
    lateralityD: number
    lateralityE: number
    scoreLips: number
}

export interface CreateResponseMobilityLanguage {
    protrude: number
    retract: number
    lateralD: number
    lateralE: number
    raise: number
    lower: number
    scoreLanguage: number
}

export interface CreateResponseMobilityJaw{
    lower: number
    elavation: number
    lateralD: number
    lateralE: number
    protude: number
    scoreJaw: number
}

export interface CreateResponseMobilityCheeks{
    inflate: number
    sugar: number
    retract: number
    lateralizeTheAir: number
    scoreCheeks: number

}