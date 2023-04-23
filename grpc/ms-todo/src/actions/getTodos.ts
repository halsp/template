import { Action, MicroPattern } from "@halsp/router";
import { Body } from "@halsp/pipe";
import { Inject } from "@halsp/inject";
import { TodoService } from "../services/todo.service";
import { WriteIterator } from "@halsp/micro-grpc";
import { TodoEntity } from "../entities/todo.entity";

@MicroPattern("todo/TodoService/getTodos")
export default class extends Action {
  @Body("userId")
  private readonly userId!: string;
  @Inject
  private readonly todoService!: TodoService;

  async invoke(): Promise<void> {
    const todos = this.todoService.getTodos(this.userId);
    const stream = new WriteIterator<TodoEntity>();
    todos.forEach((todo) => stream.push(todo));

    this.res.setBody(stream);

    stream.end();
  }
}
