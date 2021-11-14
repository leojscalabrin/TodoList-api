import express from "express";

const configureApp = ({ models }) => {
  const app = express();

  app.use(express.json());

  app.get("/task", async (req, res) => {
    const taskList = await models.Task.find();

    res.send(taskList);
  });

  app.post("/task", async (req, res) => {
    const body = req.body;

    const newTask = await models.Task.create(body);

    req.send(newTask);
  });

  return app
};

export default configureApp;
