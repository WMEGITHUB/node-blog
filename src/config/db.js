const env = process.env.NODE_ENV // 环境变量

let MYSQL_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '201101FoUr',
    port: '8008',
    database: 'myblog'
  }; 
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '201101FoUr',
    port: '8008',
    database: 'myblog'
  };
}

module.exports = {
  MYSQL_CONF,
};