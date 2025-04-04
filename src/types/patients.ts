import { Doctor } from "./doctor";
import { Responsible } from "./responsible";

export interface Patients{
  _id: string; 
  name: string; 
  age: number; 
  doctor: Doctor; 
  responsible: Responsible; 
  isSelfResponsible: boolean; 
}
