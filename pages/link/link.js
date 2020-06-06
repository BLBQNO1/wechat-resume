// pages/link/link.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 拨打电话
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13620547041' 
    })
  },
  // 复制
  copyMail: function () {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: '1904847624@qq.com',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  copyWeChat: function () {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: 'BLBQNO1',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})