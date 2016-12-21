// pages/index/view/WXML/mudule/mudule.js
var common = require('../../../../../alert.js')
Page({
  data:{
    tranferTexts : [
      '<template/>',
    ],

    codes : [
      '<!--\n  index: int\n  msg: string\n  time: string\n-->\n<template name="msgItem">\n  <view>\n    <text> {{index}}: {{msg}} </text>\n    <text> Time: {{time}} </text>\n  </view>\n</template>',

      '<template is="msgItem" data="{{...item}}"/>',

      'Page({\n  data: {\n    item: {\n      index: 0,\n      msg: "this is a template",\n      time: "2016-09-15"\n    }\n  }\n})',

      '<template name="odd">\n  <view> odd </view>\n</template>\n<template name="even">\n  <view> even </view>\n</template>\n\n<block wx:for="{{[1, 2, 3, 4, 5]}}">\n    <template is="{{item % 2 == 0 ? "even" : "odd"}}"/>\n</block>',
    ],
  },
  jump:function(){
    wx.navigateTo({
      url: 'example/example'
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