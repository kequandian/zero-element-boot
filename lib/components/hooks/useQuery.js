//用来把传入的路径参数转化为字典格式的工具

export default function useQuery(props) {
  let value = '';
  let currtPathName = '';
  if (typeof props == 'string') {
    value = props;
  } else if (typeof props === 'object') {
    currtPathName = props.location.pathname;
    value = props.location.search;
  }
  function useQuery(dataString) {
    if (dataString) {
      const res = {};
      if (dataString.indexOf('&') != -1) {
        // console.log('dataString ==', dataString)
        const dsArray = dataString.split('&');
        dsArray.map(item => {
          const dsItemArray = item.split('=');
          res[dsItemArray[0]] = dsItemArray[1];
        });
      } else {
        // console.log('dataString 111 ==', dataString)
        const dString = dataString.split('=');
        res[dString[0]] = dString[1];
      }
      return res;
    } else {
      return {};
    }
  }
  const res = {};
  if (value) {
    if (value.indexOf('?') != -1) {
      const navArray = value.split('?');
      res.pathname = navArray[0];
      res.query = useQuery(navArray[1]);
    } else {
      res.pathname = currtPathName;
      res.query = useQuery(value);
    }
    return res;
  } else {
    return {};
  }
}