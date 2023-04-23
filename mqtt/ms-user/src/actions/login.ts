import { Action, MicroPattern } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { LoginDto } from "../dtos/login.dto";
import { Inject } from "@halsp/inject";
import { UserService } from "../services/user.service";

@MicroPattern("login")
export default class extends Action {
  @Body
  private readonly loginDto!: LoginDto;

  @Inject
  private readonly userService!: UserService;

  async invoke(): Promise<void> {
    const userInfo = this.userService.getUserInfo(
      this.loginDto.email,
      this.loginDto.password
    );
    this.res.setPayload(
      userInfo ?? {
        id: null,
        email: null,
      }
    );
  }
}
