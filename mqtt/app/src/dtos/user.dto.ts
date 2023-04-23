import { V } from "@halsp/validator";
export class UserDto {
  @V.Required()
  id!: string;

  @V.Required()
  email!: string;
}
