const { LambdaStartup } = require("@halsp/lambda");
require("@halsp/static");

const app = new LambdaStartup().useStatic({
  dir: "web",
  listDir: false,
  use404: true,
  useIndex: true,
  method: "GET",
  useExt: true,
});
module.exports.main = (event, context) => app.run(event, context);
