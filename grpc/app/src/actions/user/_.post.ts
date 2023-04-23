import { Action } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { LoginDto } from "../../dtos/login.dto";
import { MicroGrpcClient } from "@halsp/micro-grpc-client";
import { MicroClient } from "@halsp/micro-client";
import { UserService } from "../../services/user.service";
import { V } from "@halsp/validator";

@V.Tags("user").Summary("Login with user service")
export default class extends Action {
  @Body
  private readonly loginDto!: LoginDto;

  @MicroClient("user")
  private readonly client!: MicroGrpcClient;

  async invoke(): Promise<void> {
    const service = this.client.getService<UserService>("user", "UserService");
    if (!service) {
      this.badRequest();
      return;
    }

    const userInfo = await service.login(this.loginDto);
    if (!userInfo?.id) {
      this.badRequestMsg("Wrong email or password");
    } else {
      this.ok(userInfo);
    }
  }
}
