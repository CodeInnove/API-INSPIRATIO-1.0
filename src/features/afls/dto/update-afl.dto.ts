import { PartialType } from "@nestjs/swagger";
import { CreateAflDto } from "./create-afl.dto";

export class UpdateAflDto extends PartialType(CreateAflDto) {}