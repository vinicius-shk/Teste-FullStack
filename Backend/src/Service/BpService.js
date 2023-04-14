const BpModel = require('../Model/BpModel');

class BpService {
  constructor() {
    this.bpModel = new BpModel();
  }

  async crawl() {
    const response = await this.bpModel.crawl();
    return { type: 200, message: response };
  }
}

module.exports = BpService;
