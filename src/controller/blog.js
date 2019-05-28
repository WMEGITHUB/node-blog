const {exec} = require('./../db/mysql.js');

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1`;

  if (author) {
    sql += ` and author=${author}`;
  }
  if (keyword) {
    sql += ` and title like %${keyword}%`;
  }
  sql += ` order by createtime desc;`;

  return exec(sql);
};

const getDetail = (id) => {
  return {
    id: 1,
    title: 'title A',
    content: 'content A',
    createTime: 1558491219645,
    author: 'zhangsan',
  };
};

const newBlog = (blogData = {}) => {
  // blogData 对象 包含title content etc

  return {
    id: 3, // 新建blog 数据库id
  };
};

const updateBlog = (id, blogData = {}) => {
  // blogData 对象 包含title content etc
  // id blog
  return true;
};

const delBlog = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};