import { Schema, Document } from 'mongoose';
import { AddressDto } from 'src/commons/dtos/Address.dto';
import { IGeneralAnamnese } from 'src/features/anamnese_general/types/generalAnamnese';


export const generalAnamnese = new Schema({
    identification: {
    patient: { type: Schema.Types.ObjectId, ref: "patient" },
    dateBirth: { type: String, required: true },
    age: { type: Number, required: true },
    maritalStatus: { type: String, required: true },
    sex: { type: String, required: true },
    naturalization: { type: String, required: true },
    nationality: { type: String, required: true },
    schoolName: { type: String , required: true },
    schoolPeriod: { type: String , required: true },

    affiliation: {
        fatherName: { type: String, required: true },
        ageFather: { type: Number, required: true },
        FatherProfession: { type: String, required: true },
        schooling: { type: String, required: true },
        motherName: { type: String, required: true },
        ageMother: { type: Number, required: true },
        MotherProfession: { type: String, required: true },
        schoolingMother: { type: String, required: true },
        brotherName: { type: String, required: true},
        brotherAge: { type: Number, required: true },
        },

        address: {
            street: { type: String, required: true },
            number: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: { type: String, required: true },
            fone: { type: String, required: true },
            responsible: { type: String, required: true },
            forwarded: { type: String, required: true },
            dateAnamnese: { type: Date, required: true },
            professional: { type: String, required: true },
        },
    },

    complaintAndDuration: {
        empty: { type: String, required: true },
    },

    background: {
        constitutional:{
            gestation: { type: String, required: true },
            childbirth: { type: String, required: true },
            complications: { type: String, required: true },
            useMedications: { type: String, required: true }, // SIM ou NÃO
            medicalAdvice: { type: String, required: true }, // sob orientação medica ? 
            which: { type: String, required: true },
            prenatal: { type: String, required: true },
            why: { type: String, required: true },
            problems: { type: String, required: true }, // pergunta SIM OU NAO - A criança teve algum problema? 
            whichProblem: { type: String, required: true }, // Qual problema..
        },

        circumstantial: {
            hoursWorkParents: { type: String, required: true },
            responsibleChild: { type: String, required: true }, // Com quem a criança fica ? 
            weeklyRoutine: { type: String, required: true },
        },
    },

    development: {
        physical: {
            semantics: {
                sleep: { type: String, required: true },
                illness: { type: String, required: true },
                HearingInfection: { type: String, required: true }, //Audição/ Infecção de Ouvido (Otite)
                vision: { type: String, required: true },
                allergy: { type: String, required: true },
                Surgery: { type: String, required: true }, //Cirurgia e data
                hospitalization: { type: String, required: true },
                medication: { type: String, required: true },
                breastfed: { type: String, required: true }, // Amamentação / ate quando ? 
                lookedAtMotherWhileBreastfeeding: { type: String, required: true }, // Olhava para mãe na Amamentação
                whatDoYouEatNow: { type: String, required: true }, // O que come atualmente?
                didyouChokeEasily : { type: String, required: true }, // Engasgava com facilidade?
                gastroesophagealReflux: { type: String, required: true }, // Refluxo gastroesofágico?
                didYouUseaBottle: { type: String, required: true }, // Usou mamadeira?
                whenDidYouStartUsingIt: { type: String, required: true }, // Quando começou a usar ? 
                whenDidYouSwitchFromLiquidToPastyFoods: { type: String, required: true }, // Quando mudou de alimentos líquidos para pastosos?   
                softFoodsToSolids: { type: String, required: true }, // pastosos para sólidos?
                fever: { type: String, required: true },
                fainting : { type: String, required: true },
                seizures: { type: String, required: true },
                otherProblema: { type: String, required: true },
            },
        },

        motor: {
            supportedHead: { type: String, required: true },
            satWithSupport: { type: String, required: true },
            WithoutSupport: { type: String, required: true },
            crawled: { type: String, required: true },
            walked: { type: String, required: true },
            dayTimeSphincterControl: { type: String, required: true },
            Nighttime: { type: String, required: true },
            fallsALot: { type: String, required: true },
            didHeBumpIntoEverything: { type: String, required: true },
            speechbBabble: { type: String, required: true },
            when: { type: String, required: true },
            heWasAquietBaby: { type: String, required: true },
        },

        neurovegetativeFunctions: {
            suction: { type: String, required: true },
            chewing: { type: String, required: true },
            swallowing: { type: String, required: true },
            breathing: { type: String, required: true },
            isItNoisy: { type: String, required: true },
            effort: { type: String, required: true },
            leftRightHanded: { type: String, required: true },
            didYouUse: { type: String, required: true }, // Fez uso de: Chupeta ( ) Mamadeira ( ) Dedo ( ) 
            untilWhen: { type: String, required: true },
            otherHabits: { type: String, required: true },
        },

        Ideomotor: {
            bathAlone: { type: String, required: true },
            eatAlone: { type: String, required: true },
            sinceWhen: { type: String, required: true },
            whatUse: { type: String, required: true },
            withWhichHand : { type: String, required: true },
            playBall: { type: String, required: true },
            jumpRope: { type: String, required: true },
            brushTeethAlone: { type: String, required: true },
            dressHimself: { type: String, required: true },
            putOnHisShoes: { type: String, required: true },
            tieHisSneakers: { type: String, required: true },
            zipThemUp: { type: String, required: true },
        },

        Ideatory: {
            ownInitiative: { type: String, required: true },
            showDesires: { type: String, required: true },
            whenYouAreAlone: { type: String, required: true }, // - O que faz quando está sozinho? 
            solveProblems: { type: String, required: true },
        },    
    },

    socioCultural: {
        interactive: {
            relationshipWithParents: { type: String, required: true },
            relationshipWithAdults: { type: String, required: true },
            relationshipWithChildren: { type: String, required: true },
            bestFriends: { type: String, required: true },
        },

        Integrative: {
            theyLike: { type: String, required: true },
            pressuredSpeckCorrectly: { type: String, required: true },
            familySpeechDifficulties: { type: String, required: true },
            difficultyUnderstanding: { type: String, required: true },
            eyeContact: { type: String, required: true },
            biteChildrenAggressive: { type: String, required: true },
            initiativeCommunication: { type: String, required: true },
            maintainDialogue: { type: String, required: true },
            contactWithThingsLike: { type: String, required: true },
            dontLike: { type: String, required: true },
            wellSchool: { type: String, required: true },
            startSchool: { type: String, required: true },
            adaptWell: { type: String, required: true },
            howBehave: { type: String, required: true },
            respondYourName: { type: String, required: true },
        }
    },

    importantObservations: {type: String, required: true },

});

export interface IGeneralAnamneseEntity extends Omit<IGeneralAnamnese, '_id'>, Document { }