import { MicroMqttStartup } from "@halsp/micro-mqtt";
import "@halsp/router";
import "@halsp/inject";
import { TodoService } from "./services/todo.service";
import { InjectType } from "@halsp/inject";

new MicroMqttStartup({
  port: 1883,
  host: "broker-cn.emqx.io",
})
  .useInject()
  .inject(TodoService, InjectType.Singleton)
  .useRouter({
    prefix: "halsp.todo.",
  })
  .listen();
