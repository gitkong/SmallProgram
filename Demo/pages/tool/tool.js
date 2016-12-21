//author gitkong 
//获取应用实例
var app = getApp()
Page({
  data: {
    introduction: '介绍：\n  框架提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，可以让开发者可以方便的聚焦于数据与逻辑上。\n\n',

    authorMessage: '\n\n* 首先声明：所有内容来自微信官方文档！\n*\n* 本人一直从事iOS开发，前端的也自学过点皮毛，小程序出来挺久了，2016.12.12开始着手研究，当然首先是看官方文档，发现文档还是比较详细的，就打算写个小程序版的文档来练手~功能点会持续更新！欢迎关注\n*\n* author gitkong\n* gitHub https://github.com/gitkong\n* 简书 gitkong\n* 微信公众号 原创技术分享\n*\n* 欢迎关注我简书（搜gitkong），喜欢就给个like 和 star 喔~',

    items:[
      {
        name : '概览',
        arrowImagePath : "../../image/arrowright.png" ,
        url : 'frame/frame',
        isShow : false,
        isLevels : false,
        detailItems:[]
        
      },
      {
        name : '程序调试',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '模拟器',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '调试工具',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'Wxml Panel',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'Sources Panel',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'Network Panel',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'Appdata Panel',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'Storage Panel',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'Console Panel',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '小程序操作区',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          }
        ]
      },
      {
        name : '代码编辑',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : false,
        url : 'frame/frame',
        detailItems:[]
      },
      {
        name : '项目预览',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : false,
        url : 'frame/frame',
        detailItems:[]
      },
      {
        name : '下载',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : false,
        url : 'frame/frame',
        detailItems:[]
      },{
        name : '历史更新日志',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : false,
        url : 'frame/frame',
        detailItems:[]
      }
    ],
    userInfo: {},

    viewShow : false
  },
  //事件处理函数，优化版
  bindViewTap: function(e) {

    // 注意 ：dataset 里面的 key 都是 小写
    // 默认 如果是 0 的话，就是 false，因此外部传进来时候加一，处理的时候才减一

    // 首层index
    var index = e.target.dataset.index
    // 第二层index
    var detailIndex = e.target.dataset.detailindex
    // 第三层index
    var detailDetailIndex = e.target.dataset.detaildetailindex

    // 获取datadata 数据 进行修改
    var data = this.data
    var items = data.items

    // 先判断最底层，再往高
    if(detailDetailIndex){
      console.log('最高层  ' + index,detailIndex,detailDetailIndex)
      // 首层item
      var item = items[index - 1];
      var detailItems = item.detailItems
      // 第二层item
      var detailItem = detailItems[detailIndex - 1]
      var detailDetailItems = detailItem.detailDetailItems
      // 第三层item
      var detailDetailItem = detailDetailItems[detailDetailIndex]


    }
    else if(detailIndex){
      console.log('第二层  ' + index,detailIndex)
      // 首层item
      var item = items[index - 1];
      var detailItems = item.detailItems
      // 第二层item
      var detailItem = detailItems[detailIndex - 1]

      if (detailItem.detailIsLevels){
        // 修改状态
        detailItem.detailIsShow = !detailItem.detailIsShow
        detailItems[detailIndex - 1] = detailItem
        item.detailItems = detailItems
        items[index - 1] = item
        data.items = items
      }
      
    }
    else{
      console.log('首层  ' + index)
      // 首层item
      var item = items[index - 1];
      // 修改状态
      if (item.isLevels){
        item.isShow = !item.isShow
        items[index - 1] = item
        data.items = items
      }
    }
    this.setData(data)
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
