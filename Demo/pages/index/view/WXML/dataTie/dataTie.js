// pages/index/view/WXML/dataTie/dataTie.js
Page({
  data:{
    codes : [
      '<view> {{ message }} </view>',

      'Page({\n  data: {\n    message: "Hello MINA!"\n  }\n})',

      '<view id="item-{{id}}"> </view>',

      'Page({\n  data: {\n    id: 0\n  }\n})',

      '<view wx:if="{{condition}}"> </view>',

      'Page({\n  data: {\n    condition: true\n  }\n})',

      '<checkbox checked="{{false}}"> </checkbox>',

      '<view hidden="{{flag ? true : false}}"> Hidden </view>',

      '<view> {{a + b}} + {{c}} + d </view>',

      'Page({\n  data: {\n    a: 1,\n    b: 2,\n    c: 3\n  }\n})',

      '<view wx:if="{{length > 5}}"> </view>',

      '<view>{{"hello" + name}}</view>',

      'Page({\n  data:{\n    name: "MINA"\n }\n})',

      '<view>{{object.key}} {{array[0]}}</view>',

      'Page({\n  data: {\n    object: {\n      key: "Hello "\n    },\n    array: ["MINA"]\n  }\n})',

      '<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>',

      'Page({\n  data: {\n    zero: 0\n  }\n})',

      '<template is="objectCombine" data="{{for: a, bar: b}}"></template>',

      'Page({\n  data: {\n    a: 1,\n    b: 2\n  }\n})',

      '<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>',

      'Page({\n  data: {\n    obj1: {\n      a: 1,\n      b: 2\n    },\n    obj2: {\n      c: 3,\n      d: 4\n    }\n  }\n})',

      '<template is="objectCombine" data="{{foo, bar}}"></template>',

      'Page({\n  data: {\n    foo: "my-foo",\n    bar: "my-bar"\n  }\n})',

      '<template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>',

      'Page({\n  data: {\n    obj1: {\n      a: 1,\n      b: 2\n    },\n    obj2: {\n      c: 3,\n      d: 4,\n  a: 5\n  }\n  }\n})',
    ],

    tranferText:'{{}}',
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