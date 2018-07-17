// pages/Parenting/Parenting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
        * 页面配置
        */
    array01: [ '综合排序', '最新', '预约次数'],
    array02: ['全部', '男医生', '女医生'],
    array03: [ '升序', '从高到低','从低到高'],
    index01: 0,
    index02: 0,
    index03: 0,
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    doctordata: [{
      content: '3次上门咨询/一周答疑/1次发育评测/产后开奶/母乳指导/科学奶 ', title: '私人医生半年套餐', imgurl: '../images/touxiang.png', babay: '00',maxbaby:'￥1500.', time: '已230135位预约', path: 'doctordetail'
    }, {
        content: '3次上门咨询/一周答疑/1次发育评测/产后开奶/母乳指导/科学奶 ', title: '私人医生半年套餐', imgurl: '../images/touxiang.png', babay: '00', maxbaby: '￥1500.', time: '已230135位预约', path: 'doctordetail'
    }, {
        content: '3次上门咨询/一周答疑/1次发育评测/产后开奶/母乳指导/科学奶 ', title: '私人医生半年套餐', imgurl: '../images/touxiang.png', babay: '00', maxbaby: '￥1500.', time: '已230135位预约', path: 'doctordetail'
    }, {
        content: '3次上门咨询/一周答疑/1次发育评测/产后开奶/母乳指导/科学奶 ', title: '私人医生半年套餐', imgurl: '../images/touxiang.png', babay: '00', maxbaby: '￥1500.', time: '已230135位预约', path: 'doctordetail'
    }, {
        content: '3次上门咨询/一周答疑/1次发育评测/产后开奶/母乳指导/科学奶 ', title: '私人医生半年套餐', imgurl: '../images/touxiang.png', babay: '00', maxbaby: '￥1500.', time: '已230135位预约', path: 'doctordetail'
    }],

  },
  bindPickerChange01: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index01: e.detail.value
    })
  },
  bindPickerChange02: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index02: e.detail.value
    })
  },
  bindPickerChange03: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index03: e.detail.value
    })
  },
  jumpPages: function (e) {
    let path = e.currentTarget.id;
    console.log(path)
    //let pathcopy = e.currentTarget.dataset.identity;
    // console.log(e)
    var value = wx.getStorageSync('userInfo')
    //console.log(value)
    wx.navigateTo({
      url: "../" + path + "/" + path + "",
    })


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