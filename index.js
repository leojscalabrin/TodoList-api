import express from "express";
import dotenv from 'dotenv';

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

app.get("/task", (req, res) => {
  res.send(taskList);
});

app.post("/task", (req, res) => {
  const body = req.body;

  taskList.push(body);

  res.send(taskList);
});

app.get("/ping", (_, res) => {
  res.send("PONG");
});

app.listen(PORT, () => console.log("Iniciou el servidor"));
