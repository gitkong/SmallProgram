// pages/component/frame/frame.js
var common = require('../../../alert.js')
Page({
  data:{
    
    forms : [
            [
              {
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : true,
                      text : 'hello world'
                   },
                   {
                      isJump : true,
                      text : 'hello world'
                   },
                   {
                      isJump : true,
                      text : 'hello world'
                   },
               ]
            },
            {
               isSpecial : false,
               isTitle : false,
               contents : [
                   {
                      isJump : false,
                      text : 'hello gitkong'
                   },
                   {
                      isJump : false,
                      text : 'what'
                   },
                   {
                      isJump : false,
                      text : 'hello'
                   },
               ]
            },
            {
               isSpecial : false,
               isTitle : false,
               contents : [
                   {
                      isJump : false,
                      text : 'hello world'
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