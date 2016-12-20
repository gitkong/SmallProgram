// pages/index/module/module.js
var common = require('../../../../alert.js')
Page({
  data:{
    codes:[
      '// app.js\nApp({\n  globalData: 1\n})',

      '// a.js\n// The localValue can only be used in file a.js.\nvar localValue = "a"\n// Get the app instance.\nvar app = getApp()\n// Get the global data and change it.\napp.globalData++',

      '// b.js\n// You can redefine localValue in file b.js, without interference with the localValue in a.js.\nvar localValue = "b"\n// If a.js it run before b.js, now the globalData shoule be 2.\nconsole.log(getApp().globalData)',

      '// common.js\nfunction sayHello(name) {\n  console.log(`Hello ${name} !`)\n}\nfunction sayGoodbye(name) {\n  console.log(`Goodbye ${name} !`)\n}\nmodule.exports.sayHello = sayHello\nexports.sayGoodbye = sayGoodbye',

      'var common = require("common.js")\nPage({\n  helloMINA: function() {\n    common.sayHello("MINA")\n  },\n  goodbyeMINA: function() {\n    common.sayGoodbye("MINA")\n  }\n})',
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