import puppeteer from "puppeteer";
import express from "express";
import cors from "cors";

const crawler = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.who.int/emergencies/disease-outbreak-news", {
    waitUntil: "networkidle2",
  });
  const spanVal = await page.$eval(".sf-list-vertical", (el) => el.innerText);
  const app = express();
  app.use(cors());
  app.get("/", (req, res) => {
    res.json({ foo: spanVal });
  });
  app.listen(5001);
  console.log(spanVal);
  //await page.screenshot({ path: "mywebsite.png" });
  //console.log(await page.content());
  console.log("done");

  await browser.close();
})();
