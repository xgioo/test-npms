var express = require("express");
var app = express();
const sqlFn = require("./db");
app.get("/list", function (req, res) {
  let sql = "SELECT * FROM `cate`";
  sqlFn(sql, function (result) {
    res.send(result);
  });
});

app.get("/other", function (req, res) {
  let sql = "other sql";
  sqlFn(sql, function (result) {
    res.send(result);
  });
});

app.listen(3000, function () {
  console.log("监听端口3000");
});
