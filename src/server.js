import configureDatabase from "./data/index.js";
import dotenv from "dotenv";
import configureApp from "./presentation/index.js";

dotenv.config();
const PORT = process.env.PORT;

async function run() {
  const ENV = {
    DATA_URL: process.env.DATA_URL
  };

  const models = await configureDatabase( ENV );
  const app = configureApp({ models });

  app.listen(PORT, () => console.log("Iniciou el servidor"));
}

run();
