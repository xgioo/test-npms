var express = require("express");
var app = express();
// 导入模块
const mysql = require("mysql2");

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_db",
});

app.get("/list", function (req, res) {
  let sql = 'SELECT * FROM `cate` WHERE `name` = "工作" AND `id` = 1';
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  });
});

app.get("/list2", function (req, res) {
  let sql = 'SELECT * FROM `cate` WHERE `name` = "健身" AND `id` = 2';
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log("监听端口3000");
});
