
var common = require('../../../../../../alert.js')
Page({
  data:{
    title : 'hello world',
    child_title : '我来给你演示一下',
    forms : [
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : true,
                      text : 'gitKong1'
                   },
                   {
                      isJump : false,
                      text : 'gitKong2'
                   },
                   {
                      isJump : false,
                      text : 'gitKong3'
                   },
               ]
            },
            {
               isSuperSpecial : false,
               isSpecial : true,
               isTitle : false,
               contents : [
                   {
                      isJump : true,
                      text : 'i'
                   },
                   {
                      isJump : false,
                      text : 'love'
                   },
                   {
                      isJump : false,
                      text : 'you'
                   },
               ]
            },
            {
               isSuperSpecial : true,
               isSpecial : false,
               isTitle : false,
               contents : [
                   {
                      isJump : true,
                      text : '列'
                   },
                   {
                      isJump : false,
                      text : 'love'
                   },
                   {
                      isJump : false,
                      text : '凤'
                   },
               ]
            },
            ],
        ],
  },
  jump:function(){
    common.showAlert()
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