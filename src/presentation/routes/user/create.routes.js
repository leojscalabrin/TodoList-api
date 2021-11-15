import UserService from "../../../services/user";

const createUserRouter = (deps) => {
  const userService = new UserService(deps);

  return async(req, res) => {
    try {
      const body = req.body;

      const newUser = await userService.create(body);

      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
};

export default createUserRouter;
