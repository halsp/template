import { Action, MicroPattern } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { Inject } from "@halsp/inject";
import { TodoService } from "../services/todo.service";

@MicroPattern("getTodos")
export default class extends Action {
  @Body("userId")
  private readonly userId!: string;
  @Inject
  private readonly todoService!: TodoService;

  async invoke(): Promise<void> {
    const todos = this.todoService.getTodos(this.userId);
    this.res.setBody(todos);
  }
}
