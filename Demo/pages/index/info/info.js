// pages/index/info/info.js
// 导入js
var common = require('../alert.js')

Page({
  data:{
    json : [
      '{\n"pages": [\n"pages/index/index",\n"pages/logs/index"\n],\n"window": {\n"navigationBarTitleText": "Demo"\n},\n"tabBar": {\n"list": [\n{\n"pagePath": "pages/index/index",\n"text": "首页"\n}, \n{\n"pagePath": "pages/logs/logs",\n"text": "日志"\n}\n]\n},\n"networkTimeout": {\n"request": 10000,\n"downloadFile": 10000\n},\n"debug": true\n}\n',
      '{\n"pages": [\n"pages/index/index",\n"pages/logs/index"\n]\n}',
      '{\n"window":{\n  "navigationBarBackgroundColor": "#ffffff",\n  "navigationBarTextStyle": "black",\n  "navigationBarTitleText": "微信接口功能演示",\n  "backgroundColor": "#eeeeee",\n  "backgroundTextStyle": "light"\n }\n}\n',
      '{\n"navigationBarBackgroundColor": "#ffffff",\n"navigationBarTextStyle": "black",\n\n"navigationBarTitleText": "微信接口功能演示",\n"backgroundColor": "#eeeeee",\n"backgroundTextStyle": "light"\n}'
    ],
    images : [
      'https://mp.weixin.qq.com/debug/wxadoc/dev/image/config.jpg?t=20161122',
      'https://mp.weixin.qq.com/debug/wxadoc/dev/image/tabbar.png?t=20161122',
    ]
  },
  
  jump:function(){
    // wx.showModal({
    //   title: '提示',
    //   content: '敬请期待',
    //    success: function(res) {
    //     if (res.confirm) {
    //       // console.log('用户点击确定')
    //     }
    //   }
    // })
    common.showAlert()
  },
  countImageUrlSize:function(){
    var data = this.data
    var images = data["images"]
    for(var index in images){
      var url = images[index]

    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady:function(){
    // 页面渲染完成
    

    this.countImageUrlSize()
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