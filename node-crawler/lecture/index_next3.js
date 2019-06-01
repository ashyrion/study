const xlsx = require("xlsx");
const puppeteer = require("puppeteer");
const add_to_sheet = require("./add_to_sheet");

const workbook = xlsx.readFile("xlsx/data.xlsx");
const ws = workbook.Sheets.data;
const records = xlsx.utils.sheet_to_json(ws);

const crawler = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: process.env.NODE_ENV === "production"
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
    );
    add_to_sheet(ws, "C1", "s", "평점");
    for (const [i, r] of records.entries()) {
      await page.goto(r.링크);
      const text = await page.evaluate(() => {
        const score = document.querySelector(".score.score_left .star_score");
        if (score) {
          return score.textContent;
        }
      });
      if (text) {
        console.log(r.제목, "평점", text.trim());
        const newCell = "C" + (i + 2);
        add_to_sheet(ws, newCell, "n", text.trim());
      }
      await page.waitFor(1000);
    }
    await page.close();
    await browser.close();
    xlsx.writeFile(workbook, "xlsx/result2.xlsx");
  } catch (e) {
    console.log(e);
  }
};

crawler();
