
// 单独出来的js 文件 写方法 是这种格式
function showAlert(){
    wx.showModal({
      title: '提示',
      content: '敬请期待',
       success: function(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
        }
      }
    })
  }

module.exports.showAlert = showAlert
exports.showAlert = showAlert


function refreshData(e){
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
  }

  // 对外公开
module.exports.refreshData = refreshData
exports.refreshData = refreshData