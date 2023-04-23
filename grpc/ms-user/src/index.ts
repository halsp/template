import { MicroGrpcStartup } from "@halsp/micro-grpc";
import "@halsp/router";
import "@halsp/inject";

new MicroGrpcStartup().useInject().useRouter().listen();
