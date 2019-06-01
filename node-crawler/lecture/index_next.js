const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const puppeteer = require("puppeteer");

const csv = fs.readFileSync("csv/data.csv");
const records = parse(csv.toString("utf-8"));

const crawler = async () => {
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV === "production"
  });
  const [page, page2, page3] = await Promise.all([
    browser.newPage(),
    browser.newPage(),
    browser.newPage()
  ]);
  await Promise.all([
    page.goto("https://naver.com"),
    page2.goto("https://google.com"),
    page3.goto("https://daum.net")
  ]);
  await Promise.all([
    page.waitFor(1000),
    page2.waitFor(1000),
    page3.waitFor(1000)
  ]);
  await page.close();
  await page2.close();
  await page3.close();
  await browser.close();
};

crawler();
