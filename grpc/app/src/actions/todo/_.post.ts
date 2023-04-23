import { Action } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { MicroGrpcClient } from "@halsp/micro-grpc-client";
import { MicroClient } from "@halsp/micro-client";
import { TodoService } from "../../services/todo.service";
import { CreateTodoDto } from "../../dtos/create-todo.dto";
import { V } from "@halsp/validator";

@V.Tags("todo").Summary("create todo")
export default class extends Action {
  @Body
  private readonly dto!: CreateTodoDto;

  @MicroClient("todo")
  private readonly client!: MicroGrpcClient;

  async invoke(): Promise<void> {
    const service = this.client.getService<TodoService>("todo", "TodoService");
    if (!service) {
      this.badRequest();
      return;
    }

    const todo = await service.createTodo(this.dto);
    this.ok(todo);
  }
}
