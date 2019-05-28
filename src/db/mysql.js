const mysql = require('mysql');
const {MYSQL_CONF} = require('./../config/db.js');

// 创建链接函数
const con = mysql.createConnection(MYSQL_CONF);

// 开始链接
con.connect(err => {
  if (err) {
    console.log('connect err', err);
    return;
  }
});

console.log('cont', con);


// 创建 sql 统一执行函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      console.log('result', result);
      resolve(result);
    });
  });

  return promise;
}

module.exports = {
  exec,
};