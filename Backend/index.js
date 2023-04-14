const puppeteer = require('puppeteer');

const bpCrawler = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const categories = ['celular', 'tv', 'geladeira'];
    const endpoint = 'https://www.buscape.com.br/';
    const prodLinks = [];

    for (const category of categories) {
      const prod = {
        category,
        data: []
      }
      await page.goto(endpoint.concat(category));
      await page.waitForSelector('img[decoding="async"]');
      const links = await page.$$eval('.SearchCard_ProductCard_Inner__7JhKb', (el) => el.map((link) => link.href));
      const images = await page.$$eval('img[decoding="async"]', (el) => el.map((img) => img.getAttribute('src')))
      const titles = await page.$$eval('h2.Text_Text__h_AF6', (el) => el.map((title) => title.textContent));
      const prices = await page.$$eval('p[data-testid="product-card::price"]', (el) => el.map((price) => price.textContent));
      for (let i = 0; i < links.length; i += 1) {
        const data = {
          title: titles[i],
          img_href: images[i],
          url: links[i],
          desc: "Buscapé",
          price: prices[i]
        }
        prod.data.push(data)
      }
      prodLinks.push(prod);
    }
    page.close()
return prodLinks
};

bpCrawler()
module.exports = bpCrawler;
