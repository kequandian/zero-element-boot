//替换括号内容
function formatParams(url, data) {
  if (url && url.indexOf('(')) {
    let regex = /\((.*?)\)/g; //匹配(*) 大括号里面任意内容的正则

    let arr = url.match(regex); //字符串匹配出来的数组

    let formatString = url;
    arr.map(item => {
      const str = item.substring(1, item.length - 1);
      formatString = formatString.replace(`${item}`, data[str]);
    });
    return formatString;
  }

  return url;
}

export { formatParams };