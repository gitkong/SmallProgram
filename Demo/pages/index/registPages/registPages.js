// pages/index/registPages/registPages.js
Page({
  data:{
    codes : [
      '//index.js\nPage({\ndata: {\ntext: "This is page data."\n},\nonLoad: function(options) {\n// Do some initialize when page load.\n},\nonReady: function() {\n  // Do something when page ready.\n},\nonShow: function() {\n  // Do something when page show.\n},\nonHide: function() {\n  // Do something when page hide.\n},\nonUnload: function() {\n  // Do something when page close.\n},\nonPullDownRefresh: function() {\n  // Do something when pull down.\n},\nonReachBottom: function() {\n  // Do something when page reach bottom.\n},\n// Event handler.\nviewTap: function() {\n  this.setData({\n    text: "Set some data for updating view."\n  })\n},\ncustomData: {\n  hi: "MINA"\n}\n})',

      '<view>{{text}}</view>\n<view>{{array[0].msg}}</view>',

      'Page({\ndata: {\n  text: "init data",\n  array: [{msg: "1"}, {msg: "2"}]\n}\n})',

      '<view bindtap="viewTap"> click me </view>',

      'Page({\nviewTap: function() {\nconsole.log("view tap")\n}\n})',

      '<!--index.wxml-->\n<view>{{text}}</view>\n<button bindtap="changeText"> Change normal data </button>\n<view>{{array[0].text}}</view>\n<button bindtap="changeItemInArray"> Change Array data </button>\n<view>{{object.text}}</view>\n<button bindtap="changeItemInObject"> Change Object data </button>\n<view>{{newField.text}}</view>\n<button bindtap="addNewField"> Add new data </button>',  

      '//index.js\nPage({\n data: {\n   text: "init data",\n   array: [{text: "init data"}],\n   object: {\n     text: "init data"\n   }\n },\n changeText: function() {\n    // this.data.text = "changed data"  // bad, it can not work\n    this.setData({\n      text: "changed data"\n   })\n  },\n  changeItemInArray: function() {\n    // you can use this way to modify a danamic data path\n    this.setData({\n      "array[0].text":"changed data"\n    })\n  },\n  changeItemInObject: function(){\n    this.setData({\n      "object.text": "changed data"\n    });\n  },\n  addNewField: function() {\n    this.setData({\n      "newField.text": "new data"\n  })\n  }\n})',
    ],
    images : [
      'https://mp.weixin.qq.com/debug/wxadoc/dev/image/mina-lifecycle.png?t=20161122',
    ],

    tranferText : '<navigator/>',
  },

  jump:function(){
    wx.showModal({
      title: '提示',
      content: '敬请期待',
       success: function(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
        }
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})