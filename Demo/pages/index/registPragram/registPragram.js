// pages/index/registPragram/registPragram.js
Page({
  data:{
    codes : [
      'App({\nonLaunch: function() { \n// Do something initial when launch.\n},\nonShow: function() {\n// Do something when show.\n},\nonHide: function() {\n// Do something when hide.\n},\nglobalData: "I am global data"\n})',
      '// other.js\nvar appInstance = getApp()\nconsole.log(appInstance.globalData) // I am global data'
    ],
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