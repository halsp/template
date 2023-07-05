import { Action } from "@halsp/router";
import { Query } from "@halsp/pipe";
import { MicroGrpcClient } from "@halsp/micro-grpc";
import { MicroClient } from "@halsp/micro";
import { TodoService } from "../../services/todo.service";
import { TodoDto } from "../../dtos/todo.dto";
import { V } from "@halsp/validator";

@V.Tags("todo").Summary("get todo list")
export default class extends Action {
  @Query("userId")
  @V.Required()
  private readonly userId!: string;

  @MicroClient("todo")
  private readonly client!: MicroGrpcClient;

  async invoke(): Promise<void> {
    const service = this.client.getService<TodoService>("todo", "TodoService");
    if (!service) {
      this.badRequest();
      return;
    }

    const todos = await service.getTodos({
      userId: this.userId,
    });

    const result: TodoDto[] = [];
    for await (const todo of todos) {
      result.push(todo);
    }
    this.ok(result);
  }
}
