const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,} = require('./../controller/blog.js');
const {SuccessModel, ErrorModel} = require('./../model/resModel.js');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const { id } = req.query;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const {author='', keyword=''} = req.query;
    const result = getList(author, keyword);

    return result.then(listData => {
      return new SuccessModel(listData);
    });
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const data = getDetail(id);

    return new SuccessModel(data);
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body);

    return new SuccessModel(data);
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);

    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel('更新博客失败');
    }
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const result = delBlog(id);

    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel('删除博客失败');
    }
  }
}

module.exports = handleBlogRouter;