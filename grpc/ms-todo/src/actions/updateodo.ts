import { Action, MicroPattern } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { Inject } from "@halsp/inject";
import { TodoService } from "../services/todo.service";
import { UpdateTodoDto } from "../dtos/update-todo.dto";

@MicroPattern("todo/TodoService/updateTodo")
export default class extends Action {
  @Body
  private readonly dto!: UpdateTodoDto;
  @Inject
  private readonly todoService!: TodoService;

  async invoke(): Promise<void> {
    this.res.setBody(this.todoService.updateTodo(this.dto));
  }
}
