import "@halsp/micro-grpc/server";
import "@halsp/router";
import "@halsp/inject";
import { Startup } from "@halsp/core";

new Startup().useMicroGrpc().useInject().useRouter().listen();
