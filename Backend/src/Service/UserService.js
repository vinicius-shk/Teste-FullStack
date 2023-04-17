const { User } = require('../models');

class UserService {
  constructor() {
    this.userModel = User;
  }

  async postQuery(body) {
    const response = await this.userModel.create(body);
    return { type: 201, message: response };
  }
}

module.exports = UserService;