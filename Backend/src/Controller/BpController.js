const BpService = require('../Service/BpService');

class BpController {
  constructor(req, res, next) {
    this.bpService = new BpService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async crawl() {
    try {
      const { type, message } = await this.bpService.crawl();
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }
}

module.exports = BpController;
