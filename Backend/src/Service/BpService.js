const bpCrawler = require('../Utils/bpCrawler');

class BpService {

  async crawl() {
    const response = await bpCrawler();
    return { type: 200, message: response };
  }
}

module.exports = BpService;
