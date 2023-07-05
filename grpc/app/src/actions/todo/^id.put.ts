import { Action } from "@halsp/router";
import { Body, Param } from "@halsp/pipe";
import { MicroGrpcClient } from "@halsp/micro-grpc";
import { MicroClient } from "@halsp/micro";
import { TodoService } from "../../services/todo.service";
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
  private readonly client!: MicroGrpcClient;

  async invoke(): Promise<void> {
    const service = this.client.getService<TodoService>("todo", "TodoService");
    if (!service) {
      this.badRequest();
      return;
    }

    const todo = await service.updateTodo({
      ...this.dto,
      id: this.todoId,
    });
    this.ok(todo);
  }
}
