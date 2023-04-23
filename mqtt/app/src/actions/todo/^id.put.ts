import { Action } from "@halsp/router";
import { Body, Param } from "@halsp/pipe";
import { MicroMqttClient } from "@halsp/micro-mqtt-client";
import { MicroClient } from "@halsp/micro-client";
import { UpdateTodoDto } from "../../dtos/update-todo.dto";
import { V } from "@halsp/validator";
import { TodoDto } from "../../dtos/todo.dto";

@V.Tags("todo").Summary("update todo").Response(TodoDto)
export default class extends Action {
  @Param("id")
  private readonly todoId!: string;
  @Body
  private readonly dto!: UpdateTodoDto;

  @MicroClient("todo")
  private readonly client!: MicroMqttClient;

  async invoke(): Promise<void> {
    const todo = await this.client.send("updateTodo", {
      ...this.dto,
      id: this.todoId,
    });
    this.ok(todo);
  }
}
