const loginCheck = (username, password) => {
  // fake data
  if (username === 'zhangsan' && password === '123') {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};