import { Action, MicroPattern } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { Inject } from "@halsp/inject";
import { TodoService } from "../services/todo.service";
import { CreateTodoDto } from "../dtos/create-todo.dto";

@MicroPattern("todo/TodoService/createTodo")
export default class extends Action {
  @Body
  private readonly dto!: CreateTodoDto;
  @Inject
  private readonly todoService!: TodoService;

  async invoke(): Promise<void> {
    this.res.setBody(this.todoService.createTodo(this.dto));
  }
}
