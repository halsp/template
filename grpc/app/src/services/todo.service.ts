import { WriteIterator } from "@halsp/micro-grpc";
import { CreateTodoDto } from "../dtos/create-todo.dto";
import { TodoDto } from "../dtos/todo.dto";
import { UpdateTodoDto } from "../dtos/update-todo.dto";

export interface TodoService {
  createTodo(dto: CreateTodoDto): Promise<TodoDto>;
  updateTodo(dto: UpdateTodoDto & { id: string }): Promise<TodoDto>;
  getTodos(dto: { userId: string }): Promise<WriteIterator<TodoDto>>;
  deleteTodo(dto: { id: string }): Promise<void>;
}
