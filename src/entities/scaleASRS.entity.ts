import { Schema, Document } from 'mongoose';
import { IScaleASRS } from 'src/features/scale-asrs/types/scaleASRS';

export const ScaleASRSSchema = new Schema({
  identification: {
    patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dateOfApplication: { type: String, required: true },
    evaluator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },

 
  groupA: {
    questions: [
      { 
        id: 1, 
        text: 'Com que frequência você comete erros por falta de atenção quando tem de trabalhar num projeto chato ou difícil?', 
        // Respostas podem ser obtidas por checkbox (0, 1, 2, 3)
        answers: [
          { option: 0, value: 0 }, // Nunca
          { option: 1, value: 1 }, // Raramente
          { option: 2, value: 2 }, // Algumas vezes
          { option: 3, value: 3 }, // Frequentemente
          { option: 4, value: 4 }, // Muito frequentemente
        ]
      },
      { 
        id: 2, 
        text: 'Com que frequência você tem dificuldade para manter a atenção quando está fazendo um trabalho chato ou repetitivo?', 
        answers: [
          { option: 0, value: 0 }, 
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 3, 
        text: 'Com que frequência você tem dificuldade para se concentrar no que as pessoas dizem, mesmo quando elas estão falando diretamente com você?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 4, 
        text: 'Com que frequência você deixa um projeto pela metade depois de ja ter feito as partes mais difíceis?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 5, 
        text: 'Com que frequência você tem dificuldade para fazer um trabalho que exige organização?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 6, 
        text: 'Quando você precisa fazer algo que exige muita concentração, com que frequência você evita ou adia o início?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 7, 
        text: 'Com que frequência você coloca as coisas fora do lugar ou tem dificuldade de encontrar as coisas em casa ou no trabalho?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 8, 
        text: 'Com que frequência você se distrai com atividades ou barulho a sua volta?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 9, 
        text: 'Com que frequência você tem dificuldade para lembrar de compromissos ou obrigações?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      }
    ],
    total: { type: Number, default: 0 }  // Total do grupo A (somatório das respostas)
  },

  groupB: {
    questions: [
      { 
        id: 1, 
        text: 'Você tem dificuldade em lembrar de compromissos ou prazos importantes?', 
        answers: [
          { option: 0, value: 0 }, // Nunca
          { option: 1, value: 1 }, // Raramente
          { option: 2, value: 2 }, // Algumas vezes
          { option: 3, value: 3 }, // Frequentemente
          { option: 4, value: 4 }, // Muito frequentemente
        ]
      },
      { 
        id: 2, 
        text: 'Você frequentemente perde objetos necessários para suas atividades diárias?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 3, 
        text: 'Você tem dificuldade em ficar quieto ou sentado por um longo período?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 4, 
        text: 'Você se sente frequentemente impulsivo ou apressado em suas decisões?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 5, 
        text: 'Você tem dificuldade em concluir tarefas, mesmo quando está interessado?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 6, 
        text: 'Você tem problemas com procrastinação em tarefas importantes?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 7, 
        text: 'Você frequentemente interrompe os outros durante conversas ou atividades?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 8, 
        text: 'Você sente que perde o foco facilmente em tarefas que exigem atenção?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      },
      { 
        id: 9, 
        text: 'Você se sente frequentemente ansioso ou nervoso em situações sociais?', 
        answers: [
          { option: 0, value: 0 },
          { option: 1, value: 1 },
          { option: 2, value: 2 },
          { option: 3, value: 3 },
          { option: 4, value: 4 },
        ]
      }
    ],
    total: { type: Number, default: 0 }  // Total do grupo B (somatório das respostas)
  }
});

export interface IScaleASRSEntity extends Omit<IScaleASRS, '_id'>, Document {}
