import { Router } from "express";
import createUserRouter from "./create.routes.js";
import listUserRouter from "./list.routes.js";

const userRouter = (deps) => {
  const router = Router();

  router.post("/create", createUserRouter(deps));
  router.get("/list", listUserRouter(deps));

  return router;
};

export default userRouter;
