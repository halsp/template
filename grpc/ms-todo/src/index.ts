import { MicroGrpcStartup } from "@halsp/micro-grpc";
import "@halsp/router";
import "@halsp/inject";
import { TodoService } from "./services/todo.service";
import { InjectType } from "@halsp/inject";

new MicroGrpcStartup()
  .useInject()
  .inject(TodoService, InjectType.Singleton)
  .useRouter()
  .listen();
