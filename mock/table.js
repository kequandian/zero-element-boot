export default {
  'GET /api/adm/stat/meta/template/table': {
    "code": 200,
    "message": "Success",
    "data": {
      "layout": {
        "name": "Grid",
        "props": {
          "col": 4
        }
      },
      "bussinessCompleteOrderThisYearRank": {
        "total": 1,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "商务人员名字",
          "商务人员头像",
          "商务人员电话",
          "id",
          "当年完成执行订单数量"
        ],
        "rows": [
          {
            "商务人员头像": null,
            "商务人员名字": "商务",
            "商务人员电话": "15019975481",
            "id": "876708082437197862",
            "当年完成执行订单数量": "3"
          }
        ],
        "tips": []
      },
      "popularCityRank": {
        "total": 5,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "受欢迎城市",
          "投放次数"
        ],
        "rows": [
          {
            "投放次数": "9",
            "受欢迎城市": "佛山"
          },
          {
            "投放次数": "6",
            "受欢迎城市": "北京"
          },
          {
            "投放次数": "6",
            "受欢迎城市": "广州"
          },
          {
            "投放次数": "5",
            "受欢迎城市": "深圳"
          },
          {
            "投放次数": "1",
            "受欢迎城市": "镇江市"
          }
        ],
        "tips": []
      },
      "waiterCompleteOrderThisMonthRank": {
        "total": 1,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "店小二名字",
          "店小二头像",
          "店小二电话",
          "id",
          "当月完成订单数量"
        ],
        "rows": [
          {
            "店小二头像": "[{\"url\":\"/attachments/e400dfa9-3450-4ebf-8a3b-9a3167217129.jpg\"}]",
            "店小二电话": "13560126667",
            "当月完成订单数量": "3",
            "店小二名字": "S-店小二",
            "id": "876708082437197836"
          }
        ],
        "tips": []
      },
      "children": [
        {
          "seq": 1,
          "presenter": "TableStatistic",
          "field": "advertiserAdvertingPlanRank"
        },
        {
          "seq": 2,
          "presenter": "TableStatistic",
          "field": "waiterCompleteOrderThisMonthRank"
        },
        {
          "seq": 3,
          "presenter": "TableStatistic",
          "field": "waiterCompleteOrderThisYearRank"
        },
        {
          "seq": 4,
          "presenter": "TableStatistic",
          "field": "bussinessCompleteOrderThisMonthRank"
        },
        {
          "seq": 5,
          "presenter": "TableStatistic",
          "field": "bussinessCompleteOrderThisYearRank"
        },
        {
          "seq": 6,
          "presenter": "TableStatistic",
          "field": "cinemaOrderTaskRank"
        },
        {
          "seq": 7,
          "presenter": "TableStatistic",
          "field": "popularFilmRank"
        },
        {
          "seq": 8,
          "presenter": "TableStatistic",
          "field": "popularCityRank"
        }
      ],
      "advertiserAdvertingPlanRank": {
        "total": 5,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "广告主名字",
          "广告主头像",
          "广告主联系方式",
          "广告主地址",
          "id",
          "广告计划数量"
        ],
        "rows": [
          {
            "广告主地址": "北京-北京-东城区",
            "广告主联系方式": "13800138004",
            "广告主名字": "黄斯丛",
            "广告主头像": null,
            "id": "4",
            "广告计划数量": "9"
          },
          {
            "广告主地址": "广东-深圳-南山区",
            "广告主联系方式": "13800138001",
            "广告主名字": "tuber",
            "广告主头像": null,
            "id": "1",
            "广告计划数量": "9"
          },
          {
            "广告主地址": "天津-天津-河东区",
            "广告主联系方式": "13800138002",
            "广告主名字": "tuber",
            "广告主头像": null,
            "id": "3",
            "广告计划数量": "7"
          },
          {
            "广告主地址": "广东-广州-白云区",
            "广告主联系方式": "13800138005",
            "广告主名字": "Ausa",
            "广告主头像": null,
            "id": "7",
            "广告计划数量": "4"
          },
          {
            "广告主地址": "广东-广州-天河区",
            "广告主联系方式": "13422212814",
            "广告主名字": "ACE",
            "广告主头像": null,
            "id": "6",
            "广告计划数量": "2"
          }
        ],
        "tips": []
      },
      "title": "平台排名统计",
      "waiterCompleteOrderThisYearRank": {
        "total": 1,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "店小二名字",
          "店小二头像",
          "店小二电话",
          "id",
          "当年完成订单数量"
        ],
        "rows": [
          {
            "店小二头像": "[{\"url\":\"/attachments/e400dfa9-3450-4ebf-8a3b-9a3167217129.jpg\"}]",
            "店小二电话": "13560126667",
            "当年完成订单数量": "3",
            "店小二名字": "S-店小二",
            "id": "876708082437197836"
          }
        ],
        "tips": []
      },
      "bussinessCompleteOrderThisMonthRank": {
        "total": 1,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "商务人员名字",
          "商务人员头像",
          "商务人员电话",
          "id",
          "当月完成执行订单数量"
        ],
        "rows": [
          {
            "商务人员头像": null,
            "商务人员名字": "商务",
            "商务人员电话": "15019975481",
            "id": "876708082437197862",
            "当月完成执行订单数量": "3"
          }
        ],
        "tips": []
      },
      "cinemaOrderTaskRank": {
        "total": 8,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "影院名称",
          "影院联系人",
          "影院联系方式",
          "影院地址",
          "id",
          "影院执行订单数量"
        ],
        "rows": [
          {
            "影院地址": "佛山禅城区华远东路63号兆阳广场4层",
            "影院名称": "保利国际影城佛山兆阳店",
            "影院联系方式": "13560126672",
            "影院执行订单数量": "5",
            "id": "766985300982366209",
            "影院联系人": "朝阳"
          },
          {
            "影院地址": null,
            "影院名称": "北京金逸朝阳影城",
            "影院联系方式": "13560126669",
            "影院执行订单数量": "2",
            "id": "767073150625120256",
            "影院联系人": "张三"
          },
          {
            "影院地址": "广东省广州市天河区天河路228号正佳广场7楼",
            "影院名称": "广州飞扬电影城正佳店",
            "影院联系方式": "13434173891",
            "影院执行订单数量": "2",
            "id": "768894953735585792",
            "影院联系人": "叶向阳"
          },
          {
            "影院地址": "龙岗区布吉地铁站A出口对面龙珠商城5楼",
            "影院名称": "中影南方影城布吉店",
            "影院联系方式": "13560126673",
            "影院执行订单数量": "2",
            "id": "766985300982366210",
            "影院联系人": "nanfang"
          },
          {
            "影院地址": "广州市南沙区双山大道万达广场三号娱乐楼4楼",
            "影院名称": "万达影城（南沙万达广场店）",
            "影院联系方式": "18620909958",
            "影院执行订单数量": "2",
            "id": "771428894728257537",
            "影院联系人": "hao"
          },
          {
            "影院地址": "江苏省丹阳市丹北镇五洲梦想城3楼",
            "影院名称": "江苏丹阳丹北镇派瑞联和影城",
            "影院联系方式": "18061196918",
            "影院执行订单数量": "1",
            "id": "770720105192488960",
            "影院联系人": "张平"
          },
          {
            "影院地址": "黄埔区飞晟二街6号301房（地铁6号线香雪站E出口）",
            "影院名称": "中数华昇巨幕影城(萝岗店)",
            "影院联系方式": "13600000110",
            "影院执行订单数量": "1",
            "id": "767074636809633794",
            "影院联系人": "莫"
          },
          {
            "影院地址": null,
            "影院名称": "太平洋影城·深圳京基百纳店",
            "影院联系方式": "13413413414",
            "影院执行订单数量": "1",
            "id": "768803838793613312",
            "影院联系人": "tai"
          }
        ],
        "tips": []
      },
      "popularFilmRank": {
        "total": 6,
        "current": 1,
        "pages": 1,
        "size": 10,
        "span": 2,
        "columns": [
          "S",
          "S",
          "S",
          "C",
          "C"
        ],
        "searchColumns": null,
        "header": [
          "电影名称",
          "出品地区",
          "电影封面",
          "id",
          "投放次数"
        ],
        "rows": [
          {
            "投放次数": "6",
            "电影封面": "https://p0.meituan.net/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png@160w_220h_1e_1c",
            "电影名称": "信条",
            "id": "7",
            "出品地区": "美国"
          },
          {
            "投放次数": "6",
            "电影封面": "https://p1.meituan.net/movie/988ab3d3a50f51f31d090e84da88d5ae3461853.jpg@464w_644h_1e_1c",
            "电影名称": "夺冠",
            "id": "3",
            "出品地区": "中国大陆"
          },
          {
            "投放次数": "5",
            "电影封面": "https://p0.meituan.net/movie/88dff6a7d97c6a91a125cece93ba72411017894.jpg@464w_644h_1e_1c",
            "电影名称": "西游记真假美猴王",
            "id": "4",
            "出品地区": "中国大陆、美国"
          },
          {
            "投放次数": "4",
            "电影封面": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1026447708,353294009&fm=26&gp=0.jpg",
            "电影名称": "姜子牙",
            "id": "2",
            "出品地区": "中国"
          },
          {
            "投放次数": "4",
            "电影封面": "https://p1.meituan.net/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg@160w_220h_1e_1c",
            "电影名称": "花木兰",
            "id": "6",
            "出品地区": "美国"
          },
          {
            "投放次数": "1",
            "电影封面": "/attachments/8d7e777a-33ef-4f9a-b62d-d139be14c86f.jpg",
            "电影名称": "蓝色防线",
            "id": "766966176415744004",
            "出品地区": "中国大陆"
          }
        ],
        "tips": []
      },
      "span": null
    }
  }
}
