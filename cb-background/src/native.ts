import { NativeStartup } from "@halsp/native";
import setupStartup from "./startup";

async function bootstrap() {
  const startup = setupStartup(new NativeStartup().useHttpJsonBody());
  await startup.dynamicListen();
  console.log(
    "测试服务启动成功，浏览器访问：http://localhost:9504/1920/1080/ff0000"
  );
}

bootstrap();
