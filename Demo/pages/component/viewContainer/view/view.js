// pages/component/viewContainer/view/view.js
Page({
  data:{
    codes : [
      '<view class="section">\n  <view class="section__title">flex-direction: row</view>\n  <view class="flex-wrp" style="flex-direction:row;">\n    <view class="flex-item bc_green">1</view>\n    <view class="flex-item bc_red">2</view>\n    <view class="flex-item bc_blue">3</view>\n  </view>\n</view>\n<view class="section">\n  <view class="section__title">flex-direction: column</view>\n  <view class="flex-wrp" style="height: 300px;flex-direction:column;">\n  <view class="flex-item bc_green">1</view>\n    <view class="flex-item bc_red">2</view>\n    <view class="flex-item bc_blue">3</view>\n  </view>\n</view>',
    ],
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