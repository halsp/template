import { LambdaStartup } from "@halsp/lambda";
import startup from "./startup";

const app = startup(new LambdaStartup());
export const main = async (event: any, context: any): Promise<unknown> => {
  console.log("event", JSON.stringify(event));
  console.log("context", JSON.stringify(context));

  (Object as any).hasOwn = (object: object, key: string) => {
    return object.hasOwnProperty(key);
  };

  return await app.run(event, context);
};
