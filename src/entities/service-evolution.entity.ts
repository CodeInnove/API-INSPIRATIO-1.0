import {Schema, Document} from 'mongoose'
import { IServiceEvolution } from 'src/features/service-evolution/types/serviceEvolution'

export const ServiceEvolutionSchema = new Schema ({
    _id: {type: Schema.Types.ObjectId, required: true, auto: true},
    date: {type: String},
    hours: {type: String},
    doctor: {type: Schema.Types.ObjectId, ref: 'User'},
    patient: {type: Schema.Types.ObjectId, ref: 'User'},
    resume: {type: String},
    behaviorDuringTheSession: {type: String, enum: [
        'Tranquilo', 
        'Regulado', 
        'Agitado', 
        'Chorou', 
        'Disruptivo', 
        'Crise', 
        'Fuga/Esquiva',
        'Lanche: Comeu o Lanche',
        ' Não Comeu',
        'Se Recusou',
        'Comeu Sozinho',
        'Sentou-se para Comer'
    ]},
    observation: {type: String},
})

export interface ServiceEvolutionEntity extends Omit<IServiceEvolution, '_id'>, Document {}
