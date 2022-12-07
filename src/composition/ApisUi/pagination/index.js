import React,{ useState } from "react";
import style from "./index.less";

export default function Index (props) {

    const { total=21 } = props

    const [ pageCurr, setPageCurr ] = useState(1)
    const [ totalPage, setTotalPage ] = useState(total)
    const [ groupCount, setGroupCount] = useState(7)
    const [ startPage, setStartPage] = useState(1)

    function  PageList(){
        let pages = [];
        
        if( totalPage <= 10){
            pages.push(<li key={0} className = { pageCurr === 1? style.nomore:"" } onClick = { () => goPrev() }>上一页</li>)
            for(let i = 1;i <= totalPage; i++){
                pages.push(<li onClick = { () => go(i) } className = { pageCurr === i ? style.active : "" } key={i}>{i}</li>)
            }
            pages.push(<li  className = { pageCurr === totalPage? style.nomore:"" } key={totalPage + 1} onClick = { () => goNext() }>下一页</li>)
        }else{
            pages.push(<li key={0} className = { pageCurr === 1? style.nomore:"" } onClick = { () => goPrev() }>上一页</li>)
            for(let i = startPage;i < groupCount + startPage; i++){
                if(i <= totalPage - 2){
                    pages.push(<li className = { pageCurr === i? style.active:""} key={i} onClick = {  () =>go(i) }>{i}</li>)
                }
            }
            // 分页中间的省略符
            if(totalPage - startPage >= 8){
                pages.push(<li className = { style.ellipsis } key={ -1 }>···</li>)
            }
            // 倒数第一、第二页
            pages.push(<li className = { pageCurr === totalPage -1 ? style.active:""} key={ totalPage - 1 } onClick = {  () =>go(totalPage - 1) }>{ totalPage -1 }</li>)
            pages.push(<li className = { pageCurr === totalPage ? style.active:""} key={ totalPage } onClick = {  () =>go(totalPage) }>{ totalPage }</li>)
            // 下一页
            pages.push(<li  className = { pageCurr === totalPage? style.nomore:"" } key={totalPage + 1} onClick = { () => goNext() }>下一页</li>)
        }
        return pages;
        
    }

    //
    function go (index) {

        // 处理下一页的情况
        if(index % groupCount === 1){
            setStartPage(pageCurr)
        }

        // 处理上一页的情况
        if(index % groupCount === 0){
            setStartPage(index - groupCount + 1)
        }

        // 点击最后两页时重新计算 startPage
        if(totalPage - pageCurr < 2){
            setStartPage(totalPage - groupCount)
        }
        
        setPageCurr(index)
    }

    //上一页
    function goPrev(){
        let curr = pageCurr
        curr--
        if(curr < 1){
            curr = 1
        }
        go(curr)
    }

    //下一页
    function goNext(){
        let curr = pageCurr
        curr++
        if(curr > totalPage){
            curr = totalPage
        }
        go(curr)
    }

    return(
        <div className = { style.main }>
            <ul className = { style.page }>
                {/* <li>上一页</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li className = { style.active }>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>下一页</li> */}

                <PageList/>
            </ul>
        </div>
    );
}