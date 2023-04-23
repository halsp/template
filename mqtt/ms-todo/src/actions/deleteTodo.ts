import { Action, MicroPattern } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { Inject } from "@halsp/inject";
import { TodoService } from "../services/todo.service";

@MicroPattern("deleteTodo")
export default class extends Action {
  @Body("id")
  private readonly id!: string;
  @Inject
  private readonly todoService!: TodoService;

  async invoke(): Promise<void> {
    this.todoService.deleteTodo(this.id);
  }
}
