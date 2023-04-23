import { V } from "@halsp/validator";

export class CreateTodoDto {
  @V.Required().Description(
    "Should get from token when use the production environment"
  )
  userId!: string;
  @V.Required()
  title!: string;
  @V.Required()
  content!: string;
}
