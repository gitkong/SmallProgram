// pages/index/view/WXML/listDye/listDye.js
Page({
  data:{
    codes : [
      '<view wx:for="{{array}}">\n  {{index}}: {{item.message}}\n</view>',

      'Page({\n  data: {\n    array: [{\n      message: "foo",\n    }, {\n      message: "bar"\n    }]\n  }\n})',

      '<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">\n  {{idx}}: {{itemName.message}}\n</view>',

      '<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">\n  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">\n    <view wx:if="{{i <= j}}">\n      {{i}} * {{j}} = {{i * j}}\n    </view>\n  </view>\n</view>',

      '<block wx:for="{{[1, 2, 3]}}">\n  <view> {{index}}: </view>\n  <view> {{item}} </view>\n</block>',

      '<switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>\n<button bindtap="switch"> Switch </button>\n<button bindtap="addToFront"> Add to the front </button>\n<switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>\n<button bindtap="addNumberToFront"> Add to the front </button>',

      'Page({\n  data: {\n    objectArray: [\n      {id: 5, unique: "unique_5"},\n      {id: 4, unique: "unique_4"},\n      {id: 3, unique: "unique_3"},\n      {id: 2, unique: "unique_2"},\n      {id: 1, unique: "unique_1"},\n      {id: 0, unique: "unique_0"},\n    ],\n    numberArray: [1, 2, 3, 4]\n  },\n  switch: function(e) {\n    const length = this.data.objectArray.length\n    for (let i = 0; i < length; ++i) {\n      const x = Math.floor(Math.random() * length)\n      const y = Math.floor(Math.random() * length)\n      const temp = this.data.objectArray[x]\n    this.data.objectArray[x] = this.data.objectArray[y]\n      this.data.objectArray[y] = temp\n    }\n   this.setData({\n      objectArray: this.data.objectArray\n    })\n  },\n  addToFront: function(e) {\n    const length = this.data.objectArray.length\n    this.data.objectArray = [{id: length, unique: "unique_" + length}].concat(this.data.objectArray)\n    this.setData({\n      objectArray: this.data.objectArray\n    })\n  },\n  addNumberToFront: function(e){\n    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)\n    this.setData({\n      numberArray: this.data.numberArray\n    })\n  }\n})',
    ],
    tranferTexts : [
      '<block/>',
      '<input/>',
      '<switch/>',
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