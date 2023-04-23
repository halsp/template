import { Action } from "@halsp/router";
import { Param } from "@halsp/pipe";
import { MicroMqttClient } from "@halsp/micro-mqtt-client";
import { MicroClient } from "@halsp/micro-client";
import { V } from "@halsp/validator";

@V.Tags("todo").Summary("delete todo")
export default class extends Action {
  @Param("id")
  private readonly todoId!: string;

  @MicroClient("todo")
  private readonly client!: MicroMqttClient;

  async invoke(): Promise<void> {
    await this.client.send("deleteTodo", {
      id: this.todoId,
    });
    this.noContent();
  }
}
