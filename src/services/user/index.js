class UserService {
  constructor(deps) {
    this.model = deps.models.User;
  }

  create(body) {
    const newUser = this.model.create(body);

    return newUser;
  }

  list() {
    const userList = this.model.find();

    return userList;
  }
}

export default UserService;
