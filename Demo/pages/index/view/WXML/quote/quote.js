// pages/index/view/WXML/quote/quote.js
Page({
  data:{
    tranferTexts : [
      '<template/>',
    ],
    codes : [
      '<!-- item.wxml -->\n<template name="item">\n  <text>{{text}}</text>\n</template>',

      '<import src="item.wxml"/>\n<template is="item" data="{{text: "forbar"}}"/>',

      '<!-- A.wxml -->\n<template name="A">\n  <text> A template </text>\n</template>',

      '<!-- B.wxml -->\n<import src="a.wxml"/>\n<template name="B">\n  <text> B template </text>\n</template>',

      '<!-- C.wxml -->\n<import src="b.wxml"/>\n<template is="A"/>  <!-- Error! Can not use tempalte when not import A. -->\n<template is="B"/>',

      '<!-- index.wxml -->\n<include src="header.wxml"/>\n<view> body </view>\n<include src="footer.wxml"/>',

      '<!-- header.wxml -->\n<view> header </view>',

      '<!-- footer.wxml -->\n<view> footer </view>',
    ],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // console.log(this.data['tranferTexts'])
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