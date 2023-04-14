const bpCrawler = require('../Utils/bpCrawler')

class BpModel {
  constructor() {
    this.bpCrawler = bpCrawler
  }

  async crawl() {
    const response = await this.bpCrawler();
    return response;
  }
}

module.exports = BpModel;
