import "@halsp/micro-grpc/server";
import "@halsp/router";
import "@halsp/inject";
import { TodoService } from "./services/todo.service";
import { InjectType } from "@halsp/inject";
import { Startup } from "@halsp/core";

new Startup()
  .useMicroGrpc()
  .useInject()
  .inject(TodoService, InjectType.Singleton)
  .useRouter()
  .listen();
