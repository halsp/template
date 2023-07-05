import { Action } from "@halsp/router";
import { Param } from "@halsp/pipe";
import { MicroGrpcClient } from "@halsp/micro-grpc";
import { MicroClient } from "@halsp/micro";
import { TodoService } from "../../services/todo.service";
import { V } from "@halsp/validator";

@V.Tags("todo").Summary("delete todo")
export default class extends Action {
  @Param("id")
  private readonly todoId!: string;

  @MicroClient("todo")
  private readonly client!: MicroGrpcClient;

  async invoke(): Promise<void> {
    const service = this.client.getService<TodoService>("todo", "TodoService");
    if (!service) {
      this.badRequest();
      return;
    }

    await service.deleteTodo({
      id: this.todoId,
    });
    this.noContent();
  }
}
