export default {
  'GET /api/adm/stat/meta/template/advertiser': {
    "code": 200,
    "message": "Success",
    "data": {
      "layout": {
        "name": "Grid",
        "props": {
          "col": 4,
          "justify": "center"
        }
      },
      "cinemaThisYearOrder": {
        "rates": [
          {
            "field": "cinemaThisYearOrder",
            "name": "影院今年订单数量",
            "pattern": "Count",
            "title": "影院今年订单数量",
            "value": "0",
            "chart": "BarTimeline",
            "span": "1"
          }
        ]
      },
      "cinemaOrderBudget": {
        "rates": [
          {
            "field": "cinemaOrderBudget",
            "name": "影院总营业金额",
            "pattern": "Count",
            "title": "影院总营业金额",
            "value": null,
            "chart": "BarTimeline",
            "span": "1"
          }
        ]
      },
      "children": [
        {
          "span": 1,
          "seq": 1,
          "presenter": "SingleColumnTatalDemo",
          "field": "cinemaOrderTotal",
          "title": null
        },
        {
          "span": 1,
          "seq": 2,
          "presenter": "SingleColumnTatalDemo",
          "field": "cinemaThisYearOrder",
          "title": null
        },
        {
          "span": 1,
          "seq": 3,
          "presenter": "SingleColumnTatalDemo",
          "field": "cinemaThisMonthOrder",
          "title": null
        },
        {
          "span": 1,
          "seq": 4,
          "presenter": "SingleColumnTatalDemo",
          "field": "cinemaOrderBudget",
          "title": ""
        },
        {
          "span": 4,
          "seq": 5,
          "presenter": "MonthReportDemo",
          "field": "cinemaOrderTaskMonthlyCount",
          "title": "订单月度统计"
        },
        {
          "span": 4,
          "seq": 6,
          "presenter": "MonthReportDemo",
          "field": "cinemaOrderTaskMonthlyBudgetCount",
          "title": "订单月度预算统计"
        },
        {
          "span": 2,
          "seq": 7,
          "presenter": "SpecialLabelPieDemo",
          "field": "orderTaskStatusRate",
          "title": "执行订单状态占比"
        }
      ],
      "cinemaOrderTaskMonthlyCount": {
        "identifier": "",
        "field": "cinemaOrderTaskMonthlyCount",
        "rates": [],
        "name": null,
        "pattern": "Rate",
        "tl": "",
        "title": null,
        "chart": "BarGroup_2",
        "span": null
      },
      "orderTaskStatusRate": {
        "field": "orderTaskStatusRate",
        "rates": [
          {
            "name": "已作废",
            "value": "10"
          },
          {
            "name": "待结案-已下发",
            "value": "1"
          },
          {
            "name": "已完成",
            "value": "3"
          },
          {
            "name": "执行中-待下发",
            "value": "3"
          },
          {
            "name": "结案待确认",
            "value": "1"
          },
          {
            "name": "已结案",
            "value": "4"
          }
        ],
        "pattern": "Rote",
        "name": null,
        "title": null,
        "chart": "Pie"
      },
      "title": "影院统计",
      "cinemaOrderTotal": {
        "rates": [
          {
            "field": "cinemaOrderTotal",
            "name": "影院总订单数量",
            "pattern": "Count",
            "title": "影院总订单数量",
            "value": "0",
            "chart": "BarTimeline",
            "span": "1"
          }
        ]
      },
      "cinemaOrderTaskMonthlyBudgetCount": {
        "identifier": "",
        "field": "cinemaOrderTaskMonthlyBudgetCount",
        "rates": [
          {
            "name": "2020-01",
            "value": null,
            "seq": "1"
          },
          {
            "name": "2020-02",
            "value": null,
            "seq": "2"
          },
          {
            "name": "2020-03",
            "value": null,
            "seq": "3"
          },
          {
            "name": "2020-04",
            "value": null,
            "seq": "4"
          },
          {
            "name": "2020-05",
            "value": null,
            "seq": "5"
          },
          {
            "name": "2020-06",
            "value": null,
            "seq": "6"
          },
          {
            "name": "2020-07",
            "value": null,
            "seq": "7"
          },
          {
            "name": "2020-08",
            "value": null,
            "seq": "8"
          },
          {
            "name": "2020-09",
            "value": null,
            "seq": "9"
          },
          {
            "name": "2020-10",
            "value": "328500.00",
            "seq": "10"
          },
          {
            "name": "2020-11",
            "value": null,
            "seq": "11"
          },
          {
            "name": "2020-12",
            "value": null,
            "seq": "12"
          }
        ],
        "name": null,
        "pattern": "Rate",
        "tl": "",
        "title": null,
        "chart": "BarGroup_2",
        "span": null
      },
      "span": null,
      "cinemaThisMonthOrder": {
        "rates": [
          {
            "field": "cinemaThisMonthOrder",
            "name": "影院当月订单数据",
            "pattern": "Count",
            "title": "影院当月订单数据",
            "value": "0",
            "chart": "BarTimeline",
            "span": "1"
          }
        ]
      }
    }
  }
}
