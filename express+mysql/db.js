// 导入模块
const mysql = require("mysql2");

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_db",
});

function sqlFn(sql, callback) {
  connection.query(sql, function (err, results, fields) {
    callback(results);
  });
}

module.exports = sqlFn;
