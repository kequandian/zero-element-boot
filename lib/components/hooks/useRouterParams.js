module.exports = function useTokenRequest(props) {
  const {
    location
  } = props;

  if (location && location.query) {
    return location.query;
  }

  return '当前路由路径没有参数';
};