// pages/cardBag/cardBag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconType: [
      'search'
    ],
    imgUrls: [
      '../images/word/banner01.png',
      '../images/word/banner01.png',
      '../images/word/banner01.png'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 5000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    /**
       * 页面配置
       */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    videodata: [{
      name: '《观察宝宝微表情》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'babydetail'
    }, {
        name: '《智力发育开发课程》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'babydetail'
    }, {
        name: '《小儿喉炎一般多久能好》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'babydetail'
    }, {
        name: '《不停哭闹怎么办》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'babydetail'
    }, {
        name: '《不停哭闹怎么办》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'babydetail'
    }, {
        name: '《不停哭闹怎么办》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'babydetail'

    }],
    smartdata: [{
      name: '益智产品助力宝宝智力开发', url: 'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png'
    }, {
        name: '益智产品助力宝宝智力开发', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'
    }, {
        name: '益智产品助力宝宝智力开发', url: 'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png'
    }, {
        name: '益智产品助力宝宝智力开发', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'
    }, {
        name: '益智产品助力宝宝智力开发', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'
    }, {
        name: '益智产品助力宝宝智力开发', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'


    }],
    smartdata02: [{
      name: '小儿风热感冒', url: 'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png'
    }, {
      name: '幼儿急症', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'
    }, {
      name: '小儿咳嗽', url: 'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png'
    }, {
      name: '小孩发烧', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'
    }, {
      name: '小儿暑热症', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'
    }, {
      name: '小儿暑热', url: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png'


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
    console.log(options)

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
    console.log(e.target.dataset.current)
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