import configureDatabase from "./data/index.js";
import express from "express";
import dotenv from "dotenv";
import configureApp from "./presentation/index.js";

dotenv.config();
const PORT = process.env.PORT;

async function run() {
  const models = await configureDatabase();
  const app = configureApp({ models })

  app.listen(PORT, () => console.log("Iniciou el servidor"));
}

run();
