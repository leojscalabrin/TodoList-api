import UserService from "../../../services/user";

const listUserRouter = (deps) => {
  const userService = new UserService(deps);

  return async(_, res) => {
    try {
      const userList = await userService.list();

      return res.status(200).json(userList);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
};

export default listUserRouter;
