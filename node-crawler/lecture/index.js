// const parse = require("csv-parse/lib/sync");
// const fs = require("fs");
const xlsx = require("xlsx");
const axios = require("axios"); // ajax
const cheerio = require("cheerio"); // html 파싱
const add_to_sheet = require("./add_to_sheet");

// const csv = fs.readFileSync("csv/data.csv");
// const records = parse(csv.toString("utf-8"));
// records.forEach((r, i) => {
//   console.log(i, r); // r[0]이 영화재목 r[1]이 링크
// });

const workBook = xlsx.readFile("xlsx/data.xlsx");
// console.log(workBook.SheetNames);
// for (const name of workBook.SheetNames) {
//   const ws = workBook.Sheets[name];
// } // 시트별로 진행

//a1:b11 -> a2:b11
// ws["!ref"] = ws["!ref"]
//   .split(":")
//   .map((v, i) => {
//     if (i === 0) {
//       return "A2";
//     }
//     return v;
//   })
//   .join(":");
// console.log(ws["!ref"]);
const ws = workBook.Sheets.data;
const records = xlsx.utils.sheet_to_json(ws);
console.log(records);

// records.forEach((r, i) => {
//   console.log(r.제목, r.링크);
// });

// for (const [i, r] of records.entries()) {
//   console.log(i, r.제목, r.링크);
// }

const crawler = async () => {
  add_to_sheet(ws, "C1", "s", "평점");
  add_to_sheet(ws, "D1", "s", "감독");
  for (const [i, r] of records.entries()) {
    const response = await axios.get(r.링크);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      const text = $(".score.score_left .star_score").text();
      const directer = $(".info_spec dd")
        .eq(1)
        .text();
      console.log(r.제목, "평점", text.trim(), "감독", directer);
      const newCellC = "C" + (i + 2);
      const newCellD = "D" + (i + 2);
      add_to_sheet(ws, newCellC, "n", parseFloat(text.trim()));
      add_to_sheet(ws, newCellD, "s", directer.trim());
    }
  }
  xlsx.writeFile(workBook, "xlsx/result.xlsx");
  //   await Promise.all(records.map(async r => {}));
};

crawler();
