const { NativeStartup } = require("@halsp/native");
require("@halsp/static");

new NativeStartup()
  .useStatic({
    dir: "web",
    listDir: false,
    use404: true,
    useIndex: true,
    method: "GET",
    useExt: true,
  })
  .dynamicListen();
