export default {
  'GET /api/tabledata': {
    "code": 200,
    "data": [
      {
        "tableList":[
          {
            "type": "head",
            "records": [
              { "value": "编号" },
              { "value": "商品编号"},
              { "value": "商品全名" },
              { "value": "单位" },
              { "value": "数量" },
              { "value": "单价" },
              { "value": "金额" },
              { "value": "备注" },
            ]
          },
          {
            "type": "body",
            "records": [
              {
                "cols":[
                  { "value": 1, "align": "center" },
                  { "value": 5080103, "align": "center" },
                  { "value": "小号农夫山泉矿泉水", "width":300 },
                  { "value": "箱", "align": "center" },
                  { "value": 3, "align": "center" },
                  { "value": 38, "align": "center" },
                  { "value": 78, "align": "center", "unit": "money" },
                  { "value": "", "align": "center" },
                ]
              },
              {
                "cols":[
                  { "value": 2, "align": "center" },
                  { "value": 5080111, "align": "center" },
                  { "value": "中号农夫山泉矿泉水", "width":300 },
                  { "value": "箱", "align": "center" },
                  { "value": 2, "align": "center" },
                  { "value": 42, "align": "center" },
                  { "value": 84, "align": "center", "unit": "money" },
                  { "value": "", "align": "center" },
                ]
              },
              {
                "cols":[
                  { "value": "本页合计：",  "col": 2 },
                  { "value": "" },
                  { "value": "" },
                  { "value": 5, "align": "center" },
                  { "value": "", "align": "center" },
                  { "value": 162, "align": "center", "unit": "money" },
                  { "value": "", "align": "center" },
              
                ]
              },
              {
                "cols":[
                  { "value": "本单总计：",  "col": 2 },
                  { "value": "",  "col": 2 },
                  { "value": 10, "align": "center" },
                  { "value": "", "align": "center" },
                  { "value": 162, "align": "center","unit": "money" },
                  { "value": "", "align": "center" },
              
                ]
              }
            ]
          },
        ],
      }
    ],
    "message": "Success"
  }
}
