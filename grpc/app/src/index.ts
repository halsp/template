import { NativeStartup } from "@halsp/native";
import "@halsp/micro-grpc-client";
import "@halsp/swagger";
import "@halsp/logger";

new NativeStartup()
  .useHttpJsonBody()
  .useInject()
  .useConsoleLogger()
  .useMicroGrpc({
    identity: "user",
    port: 5001,
    host: "localhost",
  })
  .useMicroGrpc({
    identity: "todo",
    port: 5002,
    host: "localhost",
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
