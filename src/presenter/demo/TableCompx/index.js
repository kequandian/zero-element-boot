import React from 'react';
require('./index.less');

/**
 * @param {Array} tableList 表格列表
 * 
 * 每列参数
 * @param value 表格内容
 * @param width 列宽
 * @param col 夸列数
 * @param row 夸行数
 * @param align 内容位置 left  center  right
 * @param unit 单位
 * 
 */
export default function (props) {

    const { tableList } = props;
    console.log('tableListItem = ', tableList)

    function handleTable(data){
        if(data && data.length > 0){
            return tableList.map((item, index)=>{
                if(item.type == 'head'){
                    var headCols = item.records;
                    if(headCols && headCols.length > 0){
                        return (
                            <thead key={index}>
                                <tr align="center">
                                    {headCols.map((headItem, headIndex) => {
                                        const styles = {
                                            width: headItem.width ?  `${headItem.width}px` : ''
                                        }
                                       return <th key={headIndex} style={styles} >{headItem.value}</th>
                                    })}
                                </tr>
                            </thead>
                        )
                    }
                    
                } else if(item.type == 'body'){
                    var bodyRows = item.records;
                    if(bodyRows && bodyRows.length > 0){
                        return (
                            <tbody key={index}>
                                    {bodyRows.map((bodyRowItem, bodyRowIndex) => {
                                        var cols = bodyRowItem.cols;
                                        return (
                                            <tr>
                                                {cols && cols.length > 0 ? (
                                                    cols.map((colItem, colIndex) => {
                                                        const styles = {
                                                            width: colItem.width ?  `${colItem.width}px` : ''
                                                        }

                                                        if(colItem.col > 1 || colItem.row > 1){
                                                            return <td key={colIndex} colSpan={colItem.col} rowSpan={colItem.row} style={styles} align={colItem.align}>
                                                                    {handleValue(colItem.value, colItem.unit)}
                                                                </td>
                                                        }
                                                        return <td key={colIndex} style={styles} align={colItem.align}>
                                                                {handleValue(colItem.value, colItem.unit)}
                                                            </td>
                                                    })
                                                ):null}
                                            </tr>
                                        )
                                        
                                    })}
                            </tbody>
                        )
                    }
                
                }
            })
        }
    }

    //处理每列内容
    function handleValue (value, unit){
        if(unit == "money"){
            if(value){
                return outputmoney(value.toString());
            }
        }else{
            return value;
        }
    }

    function outputmoney(number) {
        number = number.replace(/\,/g, "");
        if(isNaN(number) || number == "")return "";
        number = Math.round(number * 100) / 100;
            if (number < 0){
                return '-' + outputdollars(Math.floor(Math.abs(number) - 0) + '') + outputcents(Math.abs(number) - 0);
            } else {
                return outputdollars(Math.floor(number - 0) + '') + outputcents(number - 0);
            }
    }

    //格式化金额
    function outputdollars(number) {
        if (number.length <= 3){
            return (number == '' ? '0' : number);
        } else {
            var mod = number.length % 3;
            var output = (mod == 0 ? '' : (number.substring(0, mod)));
            for (i = 0; i < Math.floor(number.length / 3); i++) {
                if ((mod == 0) && (i == 0))
                    output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                else
                    output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
            }
            return (output);
        }
    }

    function outputcents(amount) {
        amount = Math.round(((amount) - Math.floor(amount)) * 100);
        return (amount < 10 ? '.0' + amount : '.' + amount);
    }

    return <div>
        <table className="pure-table pure-table-bordered">

            {handleTable(tableList)}
        </table>
    </div>

}