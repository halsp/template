import { V } from "@halsp/validator";

export class LoginDto {
  @V.Required().Default("test1@hal.wang")
  email!: string;

  @V.Required().Default("123456")
  password!: string;
}
