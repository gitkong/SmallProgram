//author gitkong 
var common = require('../../alert.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    introduction: '介绍：\n  框架提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，可以让开发者可以方便的聚焦于数据与逻辑上。\n\n',

    authorMessage: '\n\n* 首先声明：所有内容来自微信官方文档！\n*\n* 本人一直从事iOS开发，前端的也自学过点皮毛，小程序出来挺久了，2016.12.12开始着手研究，当然首先是看官方文档，发现文档还是比较详细的，就打算写个小程序版的文档来练手~功能点会持续更新！欢迎关注\n*\n* author gitkong\n* gitHub https://github.com/gitkong\n* 简书 gitkong\n* 微信公众号 原创技术分享\n*\n* 欢迎关注我简书（搜gitkong），喜欢就给个like 和 star 喔~',

    items:[
      {
        name : '网络',
        arrowImagePath : "../../image/arrowright.png" ,
        url : '',
        isShow : false,
        isLevels : true,
        detailItems:[
          {
            detailName : '发起请求',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '上传、下载',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.uploadFile',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.downloadFile',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : 'WebSocket',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.connectSocket',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.onSocketOpen',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.onSocketError',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.sendSocketMessage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.onSocketMessage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.closeSocket',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.ononSocketClose',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          }
        ]
        
      },
      {
        name : '媒体',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '图片',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.chooseImage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.previewImage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getImageInfo',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '录音',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.startRecord',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.stopRecord',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '音频播放控制',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.playVoice',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.pauseVoice',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.stopVoice',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '音乐播放控制',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.getBackgroundAudioPlayerState',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.playBackgroundAudio',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.pauseBackgroundAudio',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.seekBackgroundAudio',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.stopBackgroundAudio',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.onBackgroundAudioPlay',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.onBackgroundAudioPause',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.onBackgroundAudioStop',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '文件',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.saveFile',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getSavedFileList',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getSavedFileInfo',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.removeSavedFile',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '视频',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '音频组件控制',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.createAudioContext',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '视频组件控制',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.createVideoContext',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          }
        ]
      },
      {
        name : '数据',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '数据缓存',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.setStorage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.setStorageSync',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getStorage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getStorageSync',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getStorageInfo',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.getStorageInfoSync',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.removeStorage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.removeStorageSync',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.clearStorage',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.clearStorageSync',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          }
        ]
      },
      {
        name : '位置',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '获取位置',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '查看位置',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          }
        ]
      },
      {
        name : '设备',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '网络状态',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '系统信息',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '重力感应',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '罗盘',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '拨打电话',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          }
        ]
      },
      {
        name : '界面',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '交互反馈',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.showToast',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.showModal',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.showActionSheet',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '设置导航条',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '导航',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '动画',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '绘图',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : 'wx.createContext',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.drawCanvas',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : 'wx.canvasToTempFilePath',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '其他',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          }
        ]
      },
      {
        name : '开放接口',
        arrowImagePath : "../../image/arrowright.png"  ,
        isShow : false,
        isLevels : true,
        url : '',
        detailItems:[
          {
            detailName : '登录',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : '签名加密',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          },
          {
            detailName : '用户信息',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '微信支付',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : false,
            detailUrl : 'frame/frame',
            detailDetailItems:[]
          },
          {
            detailName : '模板消息',
            detailArrowImagePath : "../../image/arrowright.png" ,
            detailIsShow : false,
            detailIsLevels : true,
            detailUrl : '',
            detailDetailItems:[
              {
                detailDetailName : '使用说明',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              },
              {
                detailDetailName : '接口说明',
                detailDetailArrowImagePath : "../../image/arrowright.png" ,
                detailDetailIsShow : false,
                detailDetailIsLevels : false,
                detailDetailUrl : 'frame/frame',
                detailDetailDetailItems : []
              }
            ]
          }
        ]
      }
    ],
    userInfo: {},

    viewShow : false
  },
  //事件处理函数，优化版
  bindViewTap: function(e) {
    // common.refreshData(e)
    // 注意 ：dataset 里面的 key 都是 小写
    // 默认 如果是 0 的话，就是 false，因此外部传进来时候加一，处理的时候才减一

    // 首层index
    var index = e.target.dataset.index
    // 第二层index
    var detailIndex = e.target.dataset.detailindex
    // 第三层index
    var detailDetailIndex = e.target.dataset.detaildetailindex

    // 获取datadata 数据 进行修改
    var data = this.data
    var items = data.items

    // 先判断最底层，再往高
    if(detailDetailIndex){
      console.log('最高层  ' + index,detailIndex,detailDetailIndex)
      // 首层item
      var item = items[index - 1];
      var detailItems = item.detailItems
      // 第二层item
      var detailItem = detailItems[detailIndex - 1]
      var detailDetailItems = detailItem.detailDetailItems
      // 第三层item
      var detailDetailItem = detailDetailItems[detailDetailIndex]


    }
    else if(detailIndex){
      console.log('第二层  ' + index,detailIndex)
      // 首层item
      var item = items[index - 1];
      var detailItems = item.detailItems
      // 第二层item
      var detailItem = detailItems[detailIndex - 1]

      if (detailItem.detailIsLevels){
        // 修改状态
        detailItem.detailIsShow = !detailItem.detailIsShow
        detailItems[detailIndex - 1] = detailItem
        item.detailItems = detailItems
        items[index - 1] = item
        data.items = items
      }
      
    }
    else{
      console.log('首层  ' + index)
      // 首层item
      var item = items[index - 1];
      // 修改状态
      if (item.isLevels){
        item.isShow = !item.isShow
        items[index - 1] = item
        data.items = items
      }
    }
    this.setData(data)
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
