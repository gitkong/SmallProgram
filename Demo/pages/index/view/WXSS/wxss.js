// pages/index/view/WXSS/wxss.js
Page({
  data:{
    forms : [
      [
        {
            isSuperSpecial : false,
            isSpecial : false,
            isTitle : true,
            contents : [
                {
                  isJump : false,
                  text : '设备'
                },
                {
                  isJump : false,
                  text : 'rpx换算px (屏幕宽度/750)'
                },
                {
                  isJump : false,
                  text : 'px换算rpx (750/屏幕宽度)'
                },
            ]
          },
          { 
            isSuperSpecial : false,
            isSpecial : false,
            isTitle : false,
            contents : [
                {
                    isJump : false,
                    text : 'iPhone5'
                },
                {
                    isJump : false,
                    text : '1rpx = 0.42px'
                },
                {
                    isJump : false,
                    text : '1px = 2.34rpx'
                },
            ]
          },
          { 
            isSuperSpecial : false,
            isSpecial : false,
            isTitle : false,
            contents : [
                {
                    isJump : false,
                    text : 'iPhone6'
                },
                {
                    isJump : false,
                    text : '1rpx = 0.5px'
                },
                {
                    isJump : false,
                    text : '1px = 2rpx'
                },
            ]
          },
          { 
            isSuperSpecial : false,
            isSpecial : false,
            isTitle : false,
            contents : [
                {
                    isJump : false,
                    text : 'iPhone6 Plus'
                },
                {
                    isJump : false,
                    text : '1rpx = 0.552px'
                },
                {
                    isJump : false,
                    text : '1px = 1.81rpx'
                },
            ]
          },
      ],

      [],
    ],

    codes : [
      '/** common.wxss **/\n.small-p {\n  padding:5px;\n}',

      '/** app.wxss **/\n@import "common.wxss";\n.middle-p {\n  padding:15px;\n}',

      '<view style="color:{{color}};" />',

      '<view class="normal_view" />',
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