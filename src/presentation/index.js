import express from "express";
import UserService from "../services/user/index.js";
import userRouter from "./routes/user/index.js";

const configureApp = ({ models }) => {
  const app = express();

  app.use(express.json());

  app.use("/user", userRouter({ models }));

  return app
};

export default configureApp;
