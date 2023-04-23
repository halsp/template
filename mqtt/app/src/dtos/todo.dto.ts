import { V } from "@halsp/validator";

export class TodoDto {
  @V.Required()
  id!: string;

  @V.Required()
  userId!: string;

  @V.Required()
  title!: string;

  @V.Required()
  content!: string;

  @V.Required()
  updatedAt!: number;

  @V.Required()
  createdAt!: number;
}
