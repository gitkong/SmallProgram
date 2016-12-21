// pages/index/view/WXML/conditionDye/conditionDye.js
Page({
  data:{
    tranferText : '<block/>',
    condition : 'condition',
    codes : [
      '<view wx:if="{{condition}}"> True </view>',

      '<view wx:if="{{length > 5}}"> 1 </view>\n<view wx:elif="{{length > 2}}"> 2 </view>\n<view wx:else> 3 </view>',

      '<block wx:if="{{true}}">\n  <view> view1 </view>\n  <view> view2 </view>\n</block>',

      '',
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