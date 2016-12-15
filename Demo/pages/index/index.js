//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    introduction: '介绍：\n  框架提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，可以让开发者可以方便的聚焦于数据与逻辑上。\n\n',

    authorMessage: '\n\n* 首先声明：所有内容来自微信官方文档！\n*\n* 本人一直从事iOS开发，前端的也自学过点皮毛，小程序出来挺久了，2016.12.12开始着手研究，当然首先是看官方文档，发现文档还是比较详细的，就打算写个小程序版的文档来练手~功能点会持续更新！欢迎关注\n*\n* author gitkong\n* gitHub https://github.com/gitkong\n* 简书 gitkong\n* 微信公众号 原创技术分享\n*\n* 欢迎关注我简书（搜gitkong），喜欢就给个like 和 star 喔~',

    items:[
      {
        name : '目录结构',
        arrowImagePath : "../../image/arrowright.png" ,
        url : 'catalogue/catalogue',
        isShow : false,
        isLevels : false,
        detailItems:[]
        
      },
      {
        name : '配置',
        arrowImagePath : "../../image/arrowright.png"  ,
        url : 'info/info',
        isShow : false,
        isLevels : false,
        url : 'frame/frame',
        detailItems:[]
      },
      {
        name : '逻辑层',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '注册程序',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '注册页面',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '模板化',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : 'API',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          }
        ]
      },
      {
        name : '视图层',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : 'WXML',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : '数据绑定',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : '条件渲染',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : '列表渲染',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : '模板',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : '事件',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : '引用',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : 'WXSS',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '组件',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          }
        ]
      }
    ],
    userInfo: {},

    viewShow : false
  },
  //事件处理函数，之前写法：外界之传入id 内部遍历 处理，对于层级结构比较多的，会卡，不建议
  lastBindViewTap: function(e) {
    // console.log(e.target.id)
    // 注意 ：dataset 里面的 key 都是 小写
    var index = e.target.dataset.index
    var detailIndex = e.target.dataset.detailindex
    var detailDetailIndex = e.target.dataset.detaildetailindex
    console.log(index,detailIndex,detailDetailIndex)

    // let show = e.target.id
    var data = this.data
    var items = data.items
    // console.log(items)
    //  forin遍历 出的是角标
    for (var index in items){
      var item = items[index]
      if (item.isLevels){
        // detail items
        var detailItems = item.detailItems
        // 拿到点击的item
        // 先判断detaildetail，没有再往上找
        for (var detailIndex in detailItems){
            var detailItem = detailItems[detailIndex]
            // console.log(detailItem)
            if (detailItem.detailIsLevels){
              if (detailItem.detailName == e.target.id){
                detailItem.detailIsShow = !detailItem.detailIsShow
                console.log(detailItem.detailName)
              }
            }
        }
        item.detailItems = detailItems
        items[index] = item
        data.items = items
        // 再判断上层的
        if (item.name == e.target.id){
          item.isShow = !item.isShow
          items[index] = item
          data.items = items
       }
      }
      else{
        console.log('没有下一级')
      }
      this.setData(data)
    }
    
    
  },

  //事件处理函数，优化版
  bindViewTap: function(e) {

    // 注意 ：dataset 里面的 key 都是 小写

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
      var item = items[index];
      var detailItems = item.detailItems
      // 第二层item
      var detailItem = detailItems[detailIndex]
      var detailDetailItems = detailItem.detailDetailItems
      // 第三层item
      var detailDetailItem = detailDetailItems[detailDetailIndex]


    }
    else if(detailIndex){
      console.log('第二层  ' + index,detailIndex)
      // 首层item
      var item = items[index];
      var detailItems = item.detailItems
      // 第二层item
      var detailItem = detailItems[detailIndex]

      if (detailItem.detailIsLevels){
        // 修改状态
        detailItem.detailIsShow = !detailItem.detailIsShow
        detailItems[detailIndex] = detailItem
        item.detailItems = detailItems
        items[index] = item
        data.items = items
      }
      
    }
    else{
      console.log('首层  ' + index)
      // 首层item
      var item = items[index];
      // 修改状态
      item.isShow = !item.isShow
      items[index] = item
      data.items = items
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
