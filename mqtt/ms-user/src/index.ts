import { MicroMqttStartup } from "@halsp/micro-mqtt";
import "@halsp/router";
import "@halsp/inject";

new MicroMqttStartup({
  port: 1883,
  host: "broker-cn.emqx.io",
})
  .useInject()
  .useRouter({
    prefix: "halsp.user.",
  })
  .listen();
