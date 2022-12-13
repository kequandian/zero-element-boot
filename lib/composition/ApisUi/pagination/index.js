import React, { useState } from "react";
import style from "./index.less";
export default function Index(props) {
  const {
    total = 21
  } = props;
  const [pageCurr, setPageCurr] = useState(1);
  const [totalPage, setTotalPage] = useState(total);
  const [groupCount, setGroupCount] = useState(7);
  const [startPage, setStartPage] = useState(1);

  function PageList() {
    let pages = [];

    if (totalPage <= 10) {
      pages.push( /*#__PURE__*/React.createElement("li", {
        key: 0,
        className: pageCurr === 1 ? style.nomore : "",
        onClick: () => goPrev()
      }, "\u4E0A\u4E00\u9875"));

      for (let i = 1; i <= totalPage; i++) {
        pages.push( /*#__PURE__*/React.createElement("li", {
          onClick: () => go(i),
          className: pageCurr === i ? style.active : "",
          key: i
        }, i));
      }

      pages.push( /*#__PURE__*/React.createElement("li", {
        className: pageCurr === totalPage ? style.nomore : "",
        key: totalPage + 1,
        onClick: () => goNext()
      }, "\u4E0B\u4E00\u9875"));
    } else {
      pages.push( /*#__PURE__*/React.createElement("li", {
        key: 0,
        className: pageCurr === 1 ? style.nomore : "",
        onClick: () => goPrev()
      }, "\u4E0A\u4E00\u9875"));

      for (let i = startPage; i < groupCount + startPage; i++) {
        if (i <= totalPage - 2) {
          pages.push( /*#__PURE__*/React.createElement("li", {
            className: pageCurr === i ? style.active : "",
            key: i,
            onClick: () => go(i)
          }, i));
        }
      } // 分页中间的省略符


      if (totalPage - startPage >= 8) {
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: style.ellipsis,
          key: -1
        }, "\xB7\xB7\xB7"));
      } // 倒数第一、第二页


      pages.push( /*#__PURE__*/React.createElement("li", {
        className: pageCurr === totalPage - 1 ? style.active : "",
        key: totalPage - 1,
        onClick: () => go(totalPage - 1)
      }, totalPage - 1));
      pages.push( /*#__PURE__*/React.createElement("li", {
        className: pageCurr === totalPage ? style.active : "",
        key: totalPage,
        onClick: () => go(totalPage)
      }, totalPage)); // 下一页

      pages.push( /*#__PURE__*/React.createElement("li", {
        className: pageCurr === totalPage ? style.nomore : "",
        key: totalPage + 1,
        onClick: () => goNext()
      }, "\u4E0B\u4E00\u9875"));
    }

    return pages;
  } //


  function go(index) {
    // 处理下一页的情况
    if (index % groupCount === 1) {
      setStartPage(pageCurr);
    } // 处理上一页的情况


    if (index % groupCount === 0) {
      setStartPage(index - groupCount + 1);
    } // 点击最后两页时重新计算 startPage


    if (totalPage - pageCurr < 2) {
      setStartPage(totalPage - groupCount);
    }

    setPageCurr(index);
  } //上一页


  function goPrev() {
    let curr = pageCurr;
    curr--;

    if (curr < 1) {
      curr = 1;
    }

    go(curr);
  } //下一页


  function goNext() {
    let curr = pageCurr;
    curr++;

    if (curr > totalPage) {
      curr = totalPage;
    }

    go(curr);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: style.main
  }, /*#__PURE__*/React.createElement("ul", {
    className: style.page
  }, /*#__PURE__*/React.createElement(PageList, null)));
}