#一、前言
- 2016年11月初，微信公众平台发布公告，宣布微信小程序正式开放公测。允许开发者将产品提交至微信公众平台审核，但是暂时不支持发布。

- 作者本人是从事iOS 开发的，但从小程序出来到开放公测，一直都想去研究研究，奈何各种"因素"没有去试（*上班有公司项目，下班就去夜跑，哈哈，反正就是借口*）到 2016.12.11日，公司也有意做小程序开发，终于定下心来研究一番，在此分享一下。

- 学习首先肯定去看 [官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=20161122) ，当然只看不行，起码敲一个Demo出来嘛，看着文档还比较详细，结构层级还是很清晰的，而且官方也有一个[Demo](https://mp.weixin.qq.com/debug/wxadoc/dev/demo.html?t=20161122)做部分功能演示,扫码就行，既然功能不是很完善，那就自己写一个 完整的小程序版 的 小程序官方文档吧！也算是个人项目！当然，**代码都是自己写的，没任何抄袭官方的Demo。**

- 本来打算把功能完善了再开文章分享，但考虑到功能点比较多，遇到的坑肯定很多，而且作者也是新手，短时间内是不可能完成，所以先分享文章，方便记录 **[开发小程序中遇到的各种问题](http://www.jianshu.com/p/1052b4f7eb5b) **，功能也能持续更新，经历两天时间，目前已经完成文档的目录搭建，看图：

![界面比较丑，大家将就一下](http://upload-images.jianshu.io/upload_images/1085031-c1d5076903cb6d6b.gif?imageMogr2/auto-orient/strip)

#二、通过本文你能了解什么
- 1、本文会简单介绍一下小程序，有个大概了解

- 2、可以大概知道小程序开发需要准备什么东西，并简单说明开发的流程

- 3、可以先知道小程序开发过程中有什么哪些要注意的问题（我在前面踩坑呢）

- 4、有个持续更新的Demo，并有对应的注释，看不懂代码，还看不懂文字么

#三、小程序
- 1、什么是小程序
>小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。也体现了“用完即走”的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载。-- Allen Zhang

- 2、小程序的影响
>现在流量越来越来，手机网络也是越来越好，网页端现在确实越来越火了，原生移动端的小伙伴都开始不淡定了，我也是一直从事iOS 开发，说实话，我一点都不担心，没有为什么的，出来就学嘛！编程的东西，原理思路都一样，只不过实现代码换了而已，到现在为止，小程序的开发工具一个大版本都没有（最新版本是0.11.112301），发展还需要一段时间，这段时间够你去学的啦

- 3、小程序究竟是用什么语言
>个人认为是**修改版的HTML、CSS、JS**，因为它跟前端的很像，只是变了些东西，例如没有HTML 的 `div` 容器，现在可以用 `view` 、`scroll-view` ，等下再分析；如果你是接触过前端开发一段时间，那你上手估计只需要几个小时，或者更短，如果你是做其他开发，没接触过前端开发，那你就需要去熟悉一下HTML、CSS、JS 的语法了，推荐几个网站：(不分先后)
>- **[菜鸟教程](http://www.runoob.com/)**    ，作者也是在这学习的喔
>- **[1纳米学习](http://1nami.com/)** ， 这个网站比较全面，总有你需要的
>- **[简书](http://www.jianshu.com/)**    ，程序员很多都在简书开源，我也是其中之一
>- **[Github](https://github.com/)** ， 这个不解释

#四、开发前的准备

- 1、熟悉HTML、CSS、JS 的语法（这点最重要）

- 2、下载专门的 [小程序开发工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=20161122) ，然后安装

- 3、开发工具的使用
  -  点击打开，需要扫二维码，界面就是这样

  ![创建项目界面](http://upload-images.jianshu.io/upload_images/1085031-19bef06803d4a17b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  -  添加新项目，填写基本信息就进入开发界面了，如果是点击历史项目，直接进入开发界面，当然如果无 AppID 部分功能受限，例如跳转效果就会很难受（这里就不作演示）

  ![添加新项目](http://upload-images.jianshu.io/upload_images/1085031-6636194b8381314b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  -  进入开发界面
  
  ![开发界面-编辑](http://upload-images.jianshu.io/upload_images/1085031-79c1c14fd75879a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  ![开发界面-调试](http://upload-images.jianshu.io/upload_images/1085031-23e3f36617a16358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#五、小程序的文件格式  [文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html?t=20161122)

![截图来自官方文档](http://upload-images.jianshu.io/upload_images/1085031-eaf86a9f08483e76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **1、js 文件是 数据获取（其中Page必须是首字段，不能修改，数据都放data里面，自定义事件同级）** 

```
//获取应用实例
var app = getApp()
Page({
  // 数据，在 WXML 中 通过 {{motto}} 就可以拿到对应 data 中的 motto 字段的值
  data: {
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100
  },
  //事件处理函数，可以通过
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
```

- **2、wxml 文件是 数据界面展示 ，跟HTML 一样，只是标签不一样了，可参考官方文档**

  ![WXML文件](http://upload-images.jianshu.io/upload_images/1085031-8461f7858dc96d85.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- **3、wxss 文件是 界面样式修改，更CSS 差不多，貌似暂时不能完美兼容CSS3**

  ![WXSS 文件](http://upload-images.jianshu.io/upload_images/1085031-f1cb91991af4ae6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **4、json 文件是 基本配置（导航栏、tabBar创建什么的）（如果是在app.json 中写的就是全局配置；如果在对应页面中写就指定页面的配置（比如设置子页面的导航栏`navigationBarTitleText`），但是pages只能写在app.json 中）注意：app.json 中的pages 中一定要配置路径，对应你项目的文件真实路径**

```
不设置全局窗口window
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```

```
设置全局窗口window，在app.json 中设置
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window": {
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "小程序",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light",
  "enablePullDownRefresh": false
  }
}
```

```
单独页面中设置窗口配置信息，不需要添加window标签
{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "gitkong",
    "navigationBarTextStyle":"black"
}
```

![json 文件配置](http://upload-images.jianshu.io/upload_images/1085031-9841d77d5d1037fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#六、我是怎么写出来的（代码比较多，只给出做法思路，详细看Demo）
- 1、首先定好要显示什么东西出来，当然要目录名字 和 箭头（有跳转标志），所以在对应 `WXML `中可以先创建一条带有名字 和 图片的 view，其中 container 是 整个底部的view，承接目录的

  ```
<view class="container">
    <view  bindtap="bindViewTap" class="frame-item">
      <text class="frame-directory">目录结构</text>
      <image class="frame-directory-img" src="../../image/arrowright.png" />
    </view>
</view>
  ```
> 保存编译（command + s），然后就能显示出来了

![没样式布局是这样的啦](http://upload-images.jianshu.io/upload_images/1085031-d0f49652b593690d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/400)


- 2、接下来就要去布局样式了，在对应 `WXSS` 文件中 编写 CSS 代码

```
/*指定子类布局，通过空格*/
.container .frame-item{
  background-color: lightcyan;
  /*内边距*/
  /*padding-left: 20px;*/
  width: 100%;
  height: 44px;
  /*保持一致，不管子控件*/
  flex: 1;
  /*有四个值，上右下左*/
  margin: 10rpx;

  /*素内弹性盒元素的方向,row|row-reverse|column|column-reverse|initial|inherit;*//*row 是水平向右，默认的*/
  display: flex;
  /*flex-direction: row;*/

  /*垂直对齐居中*/
  align-items: center;
  /*justify-content属性定义了项目在主轴上的对齐方式 flex-start | flex-end | center | space-between | space-around;*/
  justify-content: space-between;
}

/*不用选择器，就是全部text 都设置*/
text{
  /*左对齐*/
  text-align: left;
  /*内边距*/
  padding-left: 20px;
  font-size: 16px;
}

image{
  width: 20px;
  height: 20px;
  /*外边距*/
  margin-right: 20px;
}
```

> 保存编译（command + s），然后你发现正常显示了（新项目默认app.wxss 中有布局，将 `padding: 200rpx 0;` 注释掉 就能显示如下效果）


![布局样式后好看多了](http://upload-images.jianshu.io/upload_images/1085031-09a5789e8e420812.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/400)

- 3、事件处理，可以通过 `bindtap="对应 js 里面的方法名"` 给 view 绑定一个 事件

  > WXML 中 绑定了 事件

  ```
<view  bindtap="bindViewTap" class="frame-item">
    <text class="frame-directory">目录结构</text>
    <image class="frame-directory-img" src="../../image/arrowright.png" />
  </view>
```

  >对应 js 文件中的方法，方法里面实现了跳转，通过 `wx.navigateTo` 跳转，url 传入的是 绝对路径

  ```
//事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
```

- 4、多条数据显示，当然只需要去拷贝、粘贴，只需要去改显示的内容，css 和 事件 都不需要去管，只要 class 是一样，样式就一样

  ![多条数据显示](http://upload-images.jianshu.io/upload_images/1085031-25d318e0eb581223.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 5、点击显示隐藏，这个可以在WXSS 通过 `display` 属性或者在 WXML 通过 hidden属性 来控制器，作者使用的是display 方式实现的

  > WXML 中添加 判断，通过在js 中获取是否显示，来决定是否需要布局显示样式

  ```
 <view class="frame-detail-view {{frameItem.isShow ? 'frame-detail-view-show' : ''}}">
  ```

  >WXSS 中实现两种样式，显示和隐藏
  
  ```
.frame-detail-view {
  /*不显示*/
  display: none;
}
  ```

  ```
.frame-detail-view-show{
  /*显示*/
  width: 100%;
  /*垂直布局*/
  display: flex;
  flex-direction: column;
}
  ```

- 6、优化
  -  （1）小程序中，数据获取是通过 `{{data中的对应字段名}}` ，那么WXML 中的数据显示可以在js文件中获取，实现动态修改，特别是列表数据，只需要通过 `wx:for-items` 遍历，有多少条数据就显示多少个view，这点类似iOS 的 tableViewCell 和 model ，数据可以是多种多样，显示不同的数据就用不同的model，有多少个model 就有多少个cell 。

  -  （2）绑定事件跳转，可以在js 对应方法中用 `wx.navigateTo` 实现，可以通过 data 或者 id 传url进去，但这样就变得麻烦了，跳转还可以利用 `navigator` 标签，然后 设置 url 属性就可以

  - （3）层级结构比较多，具体点击哪个view 是需要 告诉 js ，js 才能去处理，一开始不知道data 可以传入多个值，只通过id 传入当前点击的目录名字，然后js 方法里面遍历寻找，从最底层开始往上遍历，虽然能实现，但效果很不好，会卡；后来直接通过data 传入当前点击的各个层级对应的index 下标（`wx:for-items` 默认下标是 index 对应元素是 item ，可以通过 `wx:for-index` 和 `wx:for-item` 修改），然后就类似iOS 的代理方法，在方法内获取对应的层级index，然后通过 `this.setData(data)` 修改data （**注意：页面数据更新都需要使用 `this.setData(修改的data)` **）

  -  （4）看[官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/module.html?t=20161122)可以知道，WXML 和 WXSS 都可以通过import 或者 include 导入引用，简单来说就是模板嘛（这点类似iOS 的封装），通过上面三个步骤优化之后，就有 WXSS  和  WXML 模板了，在指定页面通过 `@import '../index/index.wxss';`引入index.wxss 模板 和 `@import '../index/index.wxss';` 引入index.wxml 模板，此时只需要去修改指定页面 js  文件的data 数据就可以了

#七、手机预览
- 需要 注册 AppID 才可以，而注册 是需要 是企业 或者 政府 或 媒体 或 其他组织，没有个人的，因此个人项目是没办法手机上预览（类似真机调试）

![微信注册小程序截图](http://upload-images.jianshu.io/upload_images/1085031-21f087e029254729.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#八、总结
- 1、虽然入门才几天，但是遇到的问题还是挺多的，为了避免本文章篇幅太长，影响阅读，我在 **[小程序开发中的记录【持续更新】](http://www.jianshu.com/p/1052b4f7eb5b) ** 都会记录下来，欢迎 关注 & like

- 1、作者一直使用Objective-c 编程，工作需要嘛，当然 swift 和 前端也有去学去写，原理相通，只不过是换种写法，这个作为个人项目，会一直更新，直到功能完善，Demo的最新更新会在文章开头

- 2、写的Demo 虽然挺简单的，思路应该也说清楚了，分享出来也应该能带大家入门，**[Github 地址](https://github.com/gitkong/SmallProgram)** 如果大家还有什么不明白的或者上文有什么不正确的地方，欢迎评论指教，谢谢

- 3、欢迎大家去[简书](http://www.jianshu.com/users/fe5700cfb223/latest_articles)关注我，喜欢给个like 和 star ，更新也需要动力喔~
