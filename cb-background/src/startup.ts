import { Startup } from "@halsp/core";
import "@halsp/router";
import "@halsp/inject";
import { getVersion } from "@halsp/env";

export default <T extends Startup>(startup: T) =>
  startup
    .use(async (ctx, next) => {
      ctx.res.setHeader("version", (await getVersion()) ?? "");
      ctx.res.setHeader("mode", process.env.NODE_ENV ?? "");
      await next();
    })
    .useInject()
    .useEnv()
    .useRouter();
