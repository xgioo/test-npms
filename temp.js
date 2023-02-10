var express = require("express");
var app = express();

app.get("/a", function (req, res) {
  res.send("/a");
});
app.get("/a/:id", function (req, res) {
  res.send(req.params.id);
});

app.use(function (err, req, res, next) {
  console.log("检测到未处理的错误:" + err.message);
  res.send("500- 服务器错误");
});
app.use(function (req, res) {
  console.log("未处理的路由");
  res.send("404- 未找到");
});
app.listen(3000, function () {
  console.log("监听端口3000");
});
