// pages/index/view/WXML/events/events.js
var common = require('../../../../../alert.js')
Page({
  data:{
    codes : [
      '<view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>',

      'Page({\n  tapName: function(event) {\n    console.log(event)\n  }\n})',

      '{\n"type":"tap",\n"timeStamp":895,\n"target": {\n  "id": "tapTest",\n  "dataset":  {\n    "hi":"WeChat"\n  }\n},\n"currentTarget":  {\n  "id": "tapTest",\n  "dataset": {\n    "hi":"WeChat"\n  }\n},\n"detail": {\n  "x":53,\n  "y":14\n},\n"touches":[{\n  "identifier":0,\n  "pageX":53,\n  "pageY":14,\n  "clientX":53,\n  "clientY":14\n}],\n"changedTouches":[{\n  "identifier":0,\n  "pageX":53,\n  "pageY":14,\n  "clientX":53,\n  "clientY":14\n}]\n}',

      '<view id="outter" bindtap="handleTap1">\n  outer view\n  <view id="middle" catchtap="handleTap2">\n    middle view\n    <view id="inner" bindtap="handleTap3">\n      inner view\n    </view>\n  </view>\n</view>',

      '<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view>',

      'Page({\n  bindViewTap:function(event){\n    event.target.dataset.alphaBeta === 1 // - 会转为驼峰写法\n    event.target.dataset.alphabeta === 2 // 大写会转为小写\n  }\n})',
    ],

    tranferTexts:[
      '<form/>',
      '<input/>',
      '<scroll-view/>',
      '<canvas/>',
    ],
    forms : [
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '触发条件'
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
                      text : 'touchstart'
                   },
                   {
                      isJump : false,
                      text : '手指触摸动作开始'
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
                      text : 'touchmove'
                   },
                   {
                      isJump : false,
                      text : '手指触摸后移动'
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
                      text : 'touchcancel'
                   },
                   {
                      isJump : false,
                      text : '手指触摸动作被打断，如来电提醒，弹窗'
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
                      text : 'touchend'
                   },
                   {
                      isJump : false,
                      text : '手指触摸动作结束'
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
                      text : 'tap'
                   },
                   {
                      isJump : false,
                      text : '手指触摸后马上离开'
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
                      text : 'longtap'
                   },
                   {
                      isJump : false,
                      text : '手指触摸后，超过350ms再离开'
                   },
               ]
            },
            ],
// .........................第二个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
                   },
               ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : false,
                isTitle : false,
                contents : [
                    {
                        isJump : true,
                        text : 'type'
                    },
                    {
                        isJump : false,
                        text : 'String'
                    },
                    {
                        isJump : false,
                        text : '事件类型'
                    },
                ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : false,
                isTitle : false,
                contents : [
                    {
                        isJump : true,
                        text : 'timeStamp'
                    },
                    {
                        isJump : false,
                        text : 'Integer'
                    },
                    {
                        isJump : false,
                        text : '事件生成时的时间戳'
                    },
                ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : false,
                isTitle : false,
                contents : [
                    {
                        isJump : true,
                        text : 'target'
                    },
                    {
                        isJump : false,
                        text : 'Object'
                    },
                    {
                        isJump : false,
                        text : '触发事件的组件的一些属性值集合'
                    },
                ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : false,
                isTitle : false,
                contents : [
                    {
                        isJump : true,
                        text : 'currentTarget'
                    },
                    {
                        isJump : false,
                        text : 'Object'
                    },
                    {
                        isJump : false,
                        text : '当前组件的一些属性值集合'
                    },
                ]
              },
            ],
// .........................第三个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
                   },
               ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : false,
                isTitle : false,
                contents : [
                    {
                        isJump : true,
                        text : 'detail'
                    },
                    {
                        isJump : false,
                        text : 'Object'
                    },
                    {
                        isJump : false,
                        text : '额外的信息'
                    },
                ]
              },
            ],
// .........................第四个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
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
                        text : 'touches'
                    },
                    {
                        isJump : false,
                        text : 'Array'
                    },
                    {
                        isJump : false,
                        text : '触摸事件，当前停留在屏幕中的触摸点信息的数组'
                    },
                ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : false,
                isTitle : false,
                contents : [
                    {
                        isJump : true,
                        text : 'changedTouches'
                    },
                    {
                        isJump : false,
                        text : 'Array'
                    },
                    {
                        isJump : false,
                        text : '触摸事件，当前变化的触摸点信息的数组'
                    },
                ]
              },
            ],

// .........................第五个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
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
                        text : 'id'
                    },
                    {
                        isJump : false,
                        text : 'String'
                    },
                    {
                        isJump : false,
                        text : '事件源组件的id'
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
                        text : 'tagName'
                    },
                    {
                        isJump : false,
                        text : 'String'
                    },
                    {
                        isJump : false,
                        text : '当前组件的类型'
                    },
                ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : true,
                isTitle : false,
                contents : [
                    {
                        isJump : false,
                        text : 'dataset'
                    },
                    {
                        isJump : false,
                        text : 'Object'
                    },
                    {
                        isJump : false,
                        text : '事件源组件上由 data- 开头的自定义属性组成的集合'
                    },
                ]
              },
            ],
// .........................第六个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
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
                        text : 'id'
                    },
                    {
                        isJump : false,
                        text : 'String'
                    },
                    {
                        isJump : false,
                        text : '事件源组件的id'
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
                        text : 'tagName'
                    },
                    {
                        isJump : false,
                        text : 'String'
                    },
                    {
                        isJump : false,
                        text : '当前组件的类型'
                    },
                ]
              },
              { 
                isSuperSpecial : false,
                isSpecial : true,
                isTitle : false,
                contents : [
                    {
                        isJump : false,
                        text : 'dataset'
                    },
                    {
                        isJump : false,
                        text : 'Object'
                    },
                    {
                        isJump : false,
                        text : '事件源组件上由 data- 开头的自定义属性组成的集合'
                    },
                ]
              },
            ],
// .........................第七个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
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
                          text : 'identifier'
                      },
                      {
                          isJump : false,
                          text : 'Number'
                      },
                      {
                          isJump : false,
                          text : '触摸点的标识符'
                      },
                  ]
                },
                { 
                  isSuperSpecial : false,
                  isSpecial : true,
                  isTitle : false,
                  contents : [
                      {
                          isJump : false,
                          text : 'pageX, pageY'
                      },
                      {
                          isJump : false,
                          text : 'Number'
                      },
                      {
                          isJump : false,
                          text : '距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴'
                      },
                  ]
                },
                { 
                  isSuperSpecial : false,
                  isSpecial : true,
                  isTitle : false,
                  contents : [
                      {
                          isJump : false,
                          text : 'clientX, clientY'
                      },
                      {
                          isJump : false,
                          text : 'Number'
                      },
                      {
                          isJump : false,
                          text : '距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴'
                      },
                  ]
                },
              ],
// .........................第八个表格
            [
              {
               isSuperSpecial : false,
               isSpecial : false,
               isTitle : true,
               contents : [
                   {
                      isJump : false,
                      text : '属性'
                   },
                   {
                      isJump : false,
                      text : '类型'
                   },
                   {
                      isJump : false,
                      text : '说明'
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
                          text : 'identifier'
                      },
                      {
                          isJump : false,
                          text : 'Number'
                      },
                      {
                          isJump : false,
                          text : '触摸点的标识符'
                      },
                  ]
                },
                { 
                  isSuperSpecial : false,
                  isSpecial : true,
                  isTitle : false,
                  contents : [
                      {
                          isJump : false,
                          text : 'x, y'
                      },
                      {
                          isJump : false,
                          text : 'Number'
                      },
                      {
                          isJump : false,
                          text : '距离Canvas左上角的距离,Canvas的左上角为原点,横向为X轴,纵向为Y轴'
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