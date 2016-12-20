
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