import { NativeStartup } from "@halsp/native";
import "@halsp/micro-mqtt-client";
import "@halsp/swagger";
import "@halsp/logger";

new NativeStartup()
  .useHttpJsonBody()
  .useInject()
  .useConsoleLogger()
  .useMicroMqtt({
    identity: "user",
    port: 1883,
    host: "broker-cn.emqx.io",
    prefix: "halsp.user.",
  })
  .useMicroMqtt({
    identity: "todo",
    port: 1883,
    host: "broker-cn.emqx.io",
    prefix: "halsp.todo.",
  })
  .useSwagger({
    path: "",
    builder: (builder) =>
      builder
        .addTitle("NewApplication")
        .addDescription("A new application")
        .addLicense({
          name: "MIT",
        })
        .addContact({
          email: "hi@hal.wang",
        })
        .addServer({
          url: "/",
        }),
  })
  .useRouter()
  .dynamicListen();
