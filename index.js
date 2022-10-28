const webdriver = require("selenium-webdriver");
const chrome = require("chromedriver");

let driver = new webdriver.Builder()
  .forBrowser("chrome")
  .build();

driver.get("https://join.zoho.com/");
driver.executeScript(
  "document.querySelector('.report-abuse-container').style.display = 'none';"
);
driver.sleep(10000000);
// driver.quit();
