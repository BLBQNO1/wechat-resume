// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 添加微信
  addWechat: function () {
    wx.previewImage({
      urls: ['http://lblt.site/wx/wx.jpg']
    })
  },
  // 拨打电话
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13620547041' 
    })
  },
  // 添加通讯录
  addPhone: function () {
    wx.addPhoneContact({
      firstName: '海旺',
      lastName: '陈',
      weChatNumber: '13620547041',
      mobilePhoneNumber: '13620547041'
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