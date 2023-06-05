const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
const procces = require("./middleware/procces");
const userData = require("./user.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("hello world");
});

app.get("/main", (req, res) => {
  res.send("succes");
});

app.get("/data", (req,res) => {
  res.status(200).json(userData)
})

app.post("/data", procces, (req, res) => {
  res.redirect("/main");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
