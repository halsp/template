import { Action } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { LoginDto } from "../../dtos/login.dto";
import { MicroMqttClient } from "@halsp/micro-mqtt-client";
import { MicroClient } from "@halsp/micro-client";
import { V } from "@halsp/validator";
import { UserDto } from "../../dtos/user.dto";

@V.Tags("user").Summary("Login with user service")
export default class extends Action {
  @Body
  private readonly loginDto!: LoginDto;

  @MicroClient("user")
  private readonly client!: MicroMqttClient;

  async invoke(): Promise<void> {
    const userInfo = await this.client.send<UserDto>("login", this.loginDto);
    if (!userInfo?.id) {
      this.badRequestMsg("Wrong email or password");
    } else {
      this.ok(userInfo);
    }
  }
}
