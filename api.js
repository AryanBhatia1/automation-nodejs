const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const webdriver = require("selenium-webdriver");
const chrome = require("chromedriver");
const ejs = require("ejs");

const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", "../views");
app.set("view engine", "ejs");

router.get("/", (req, res) => {
  res.render("index");
});

var url;

router.post("/", (req, res) => {
  let SessionID = req.body.SessionID,
    clientName = req.body.NameClient;
  var newString = SessionID.replace(/-/g, "");
  url =
    "https://join.zoho.com/assist-join?key=" +
    newString +
    "&language=en&email=" +
    clientName;
  let driver = new webdriver.Builder().forBrowser("chrome").build();

  driver.get(url);
  driver.executeScript(
    "document.querySelector('.report-abuse-container').style.display = 'none';"
  );
  driver.sleep(10000000);
});

app.use("/", router);

module.exports.handler = serverless(app);
