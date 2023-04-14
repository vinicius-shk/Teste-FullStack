const puppeteer = require('puppeteer');

const bpCrawler = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const categories = ['celular', 'tv', 'geladeira'];
    const endpoint = 'https://www.buscape.com.br/';
    const prodLinks = [];

    for (const category of categories) {
      await page.goto(endpoint.concat(category));
      const links = await page.$$eval('.SearchCard_ProductCard_Inner__7JhKb', (el) => el.map((link) => link.href));
      prodLinks.push(...links);
    }


    // const treatedLinks = links.filter((link) => {
    //   const splitted = link.split('/');
    //   return ['celular', 'tv', 'geladeira'].includes(splitted[splitted.length - 1])
    // })

    // const categoryLinks = [...new Set(treatedLinks)];
    console.log(prodLinks);
    const arr = [];
    // for (const link of categoryLinks) {
    //     await page.goto(link);
    //     await page.waitForSelector('[data-testid="product-card::card"]');
    //     await page.waitForSelector('[data-testid="product-card::name"]');
    //     await page.waitForSelector('[data-testid="product-card::price"]');
    //     const infos = {
    //         img_href: await page.$$eval('span > img', (el) => el),
    //         url: await page.$$eval('[data-testid="product-card::card"]', (el) => el.getAttribute('href')),
    //         title: await page.$eval('[data-testid="product-card::name"]', (el) => el.innerHTML),
    //         description:  'Buscapé',
    //         price: (await page.$eval('[data-testid="product-card::price"]', (el) => el.innerHTML)),
    //     }
    //     arr.push(infos)
    //     console.log(infos);
    // }
    page.close()
return arr
};

bpCrawler()
module.exports = bpCrawler