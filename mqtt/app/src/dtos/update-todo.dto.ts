import { V } from "@halsp/validator";

export class UpdateTodoDto {
  @V.Required()
  title!: string;

  @V.Required()
  content!: string;
}
