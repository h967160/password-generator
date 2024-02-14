const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const generatePassword = require("./generatePassword");

const { engine } = require("express-handlebars");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/generate", (req, res) => {
  const data = req.body;
  const password = generatePassword(data);
  res.render("index", { data, password });
});

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
