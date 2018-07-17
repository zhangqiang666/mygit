// pages/babydetail/babydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    listdata:[{
      name: '私人医生半年套餐', moneyok: '付款成功', imgurl: '../images/touxiang.png', centent:'服务内容：3次上门咨询/一周答疑/一次发育评测/产后开奶/母乳辅导/科学断奶',money:'￥1500.00',getmoney:'实付款：'
    },{
        name: '私人医生半年套餐', moneyok: '付款成功', imgurl: '../images/touxiang.png', centent: '服务内容：3次上门咨询/一周答疑/一次发育评测/产后开奶/母乳辅导/科学断奶', money: '￥1500.00', getmoney: '实付款：'
      }, {
        name: '私人医生半年套餐', moneyok: '付款成功', imgurl: '../images/touxiang.png', centent: '服务内容：3次上门咨询/一周答疑/一次发育评测/产后开奶/母乳辅导/科学断奶', money: '￥1500.00', getmoney: '实付款：'
    }, {
      name: '私人医生半年套餐', moneyok: '付款成功', imgurl: '../images/touxiang.png', centent: '服务内容：3次上门咨询/一周答疑/一次发育评测/产后开奶/母乳辅导/科学断奶', money: '￥1500.00', getmoney: '实付款：'
    }],
    bookdata:[{
      title:'《智力发育开发课程》',centent:'试看已结束，完整版请付费购买即可观看',money:'去付费购买'
    },{
        title: '《智力发育开发课程》', centent: '试看已结束，完整版请付费购买即可观看', money: '去付费购买'
    
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    /**
     * 获取系统信息
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

  },
  /**
       * 滑动切换tab
       */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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