// 导入模块
const mysql = require("mysql2");

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_db",
});

// 简单查询
connection.query(
  'SELECT * FROM `cate` WHERE `name` = "工作" AND `id` = 1',
  function (err, results, fields) {
    console.log(results); // 结果集
  }
);
