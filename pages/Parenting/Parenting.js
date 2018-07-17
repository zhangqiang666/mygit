// pages/Parenting/Parenting.js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    listdata: [{
      content: '孩子的饮食很重要，除了食物选择还要注意这个', imgurl: 'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png', babay: 'pcbaby首页', time: '55分钟前',path:'detail'
    }, {
      content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png', babay: 'pcbaby首页', time: '55分钟前',path:'detail'
    },{
      content: '孩子的饮食很重要，除了食物选择还要注意这个', imgurl: 'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png', babay: 'pcbaby首页', time: '55分钟前',path:'detail'
    }, {
      content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png', babay: 'pcbaby首页', time: '55分钟前',path:'detail'
    }, {
      content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png', babay: 'pcbaby首页', time: '55分钟前',path:'detail'

    }]

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