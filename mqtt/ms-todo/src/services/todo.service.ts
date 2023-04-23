import { CreateTodoDto } from "../dtos/create-todo.dto";
import { UpdateTodoDto } from "../dtos/update-todo.dto";
import { TodoEntity } from "../entities/todo.entity";
import { MicroException } from "@halsp/micro";

// singleton
export class TodoService {
  #todos: TodoEntity[] = [];

  public getTodos(userId: string) {
    return this.#todos.filter((todo) => todo.userId == userId);
  }

  public deleteTodo(id: string) {
    const todo = this.#todos.filter((todo) => todo.id == id)[0];
    if (todo) {
      this.#todos.splice(this.#todos.indexOf(todo), 1);
    }
  }

  public createTodo(todo: CreateTodoDto) {
    const now = new Date().valueOf();

    const newTodo = {
      id: new Date().valueOf().toString(),
      title: todo.title,
      content: todo.content,
      userId: todo.userId,
      updatedAt: now,
      createdAt: now,
    };

    this.#todos.push(newTodo);

    return newTodo;
  }

  public updateTodo(todo: UpdateTodoDto) {
    const existTodo = this.#todos.filter((td) => td.id == todo.id)[0];
    if (!existTodo) {
      throw new MicroException();
    }

    const now = new Date().valueOf();

    existTodo.title = todo.title;
    existTodo.content = todo.content;
    existTodo.updatedAt = now;

    this.#todos.splice(this.#todos.indexOf(existTodo), 1, existTodo);

    return existTodo;
  }
}
