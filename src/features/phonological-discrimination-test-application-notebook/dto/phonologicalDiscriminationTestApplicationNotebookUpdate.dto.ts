import { PartialType } from '@nestjs/swagger';
import { CreatePhonologicalDiscriminationTestApplicationNotebookDto } from './phonologicalDiscriminationTestApplicationNotebookCreate.dto';

export class UpdatePhonologicalDiscriminationTestApplicationNotebookDto extends PartialType(CreatePhonologicalDiscriminationTestApplicationNotebookDto) {}
