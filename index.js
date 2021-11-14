import express from "express";
import dotenv from 'dotenv';
import configureDatabase from "./src/data/index.js";

dotenv.config()

const app = express();

const PORT = process.env.PORT

console.log(PORT)

app.use(express.json());

const task = {
  id: "1",
  name: "Lavar a louça",
  done: true,
};

const taskList = [task];

app.get("/task", async (req, res) => {
  const dataBase = await configureDatabase()

  const taskList = await dataBase.Task.find()

  res.send(taskList)
});

app.post("/task", async (req, res) => {
  const body = req.body

  const dataBase = await configureDatabase()

  const newTask = await dataBase.Task.create(body)

  req.send(newTask)
});

app.get("/ping", (_, res) => {
  res.send("PONG");
});

app.listen(PORT, () => console.log("Iniciou el servidor"));
