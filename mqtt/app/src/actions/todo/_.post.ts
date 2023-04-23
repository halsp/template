import { Action } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { MicroMqttClient } from "@halsp/micro-mqtt-client";
import { MicroClient } from "@halsp/micro-client";
import { CreateTodoDto } from "../../dtos/create-todo.dto";
import { V } from "@halsp/validator";

@V.Tags("todo").Summary("create todo")
export default class extends Action {
  @Body
  private readonly dto!: CreateTodoDto;

  @MicroClient("todo")
  private readonly client!: MicroMqttClient;

  async invoke(): Promise<void> {
    const todo = await this.client.send("createTodo", this.dto);
    this.ok(todo);
  }
}
