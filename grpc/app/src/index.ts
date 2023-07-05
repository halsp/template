import "@halsp/native";
import "@halsp/micro-grpc/client";
import "@halsp/swagger";
import "@halsp/logger";
import "@halsp/inject";
import { Startup } from "@halsp/core";

new Startup()
  .useNative()
  .useInject()
  .useConsoleLogger()
  .useMicroGrpcClient({
    identity: "user",
    port: 5001,
    host: "localhost",
  })
  .useMicroGrpcClient({
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
  .listen();
