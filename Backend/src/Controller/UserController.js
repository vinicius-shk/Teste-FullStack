const UserService = require('../Service/UserService');

class userController {
  constructor(req, res, next) {
    this.userService = new UserService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async postQuery() {
    try {
      const { type, message } = await this.userService.postQuery(this.req.body);
      this.res.status(type).json(message);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = userController;
