import { Action } from "@halsp/router";
import { Query } from "@halsp/pipe";
import { MicroMqttClient } from "@halsp/micro-mqtt-client";
import { MicroClient } from "@halsp/micro-client";
import { TodoDto } from "../../dtos/todo.dto";
import { V } from "@halsp/validator";

@V.Tags("todo").Summary("get todo list")
export default class extends Action {
  @Query("userId")
  @V.Required()
  private readonly userId!: string;

  @MicroClient("todo")
  private readonly client!: MicroMqttClient;

  async invoke(): Promise<void> {
    const todos = await this.client.send<TodoDto[]>("getTodos", {
      userId: this.userId,
    });
    this.ok(todos);
  }
}
