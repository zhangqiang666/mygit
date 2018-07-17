// pages/myFunction/myFunction.js
const app = getApp()
Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {
    
      // 
    listdata: [{
      name: '我的宝宝', url: '../images/word/wode.png',path:'mybaby'
    }, {
        name: '我的地址', url: '../images/word/dizhi.png', path: 'address'
    }, {
        name: '服务订单', url: '../images/word/fuwu.png', path: '', number: '1'
    }, {
        name: '图文收藏', url: '../images/word/shoucang.png', path: 'tuwen'
    }, {
        name: '我的提问', url: '../images/word/yiwen.png', path: '', number: '1'
    }, {
        name: '服务申请', url: '../images/word/fwsq.png', path: 'service', number: '5'
    }, {
        name: '我的课程', url: '../images/word/kabao.png', path: 'myclass', number: '6'
    }, {
        name: '我的消息', url: '../images/word/wdxx.png', path: 'mynews', number: '6'
    }],
    videodata: [{
      name: '《观察宝宝微表情》',man:'主讲人：xxx讲师', url: '../images/delete/video01.png',path:'education'
    }, {
        name: '《智力发育开发课程》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'education'
    }, {
        name: '《小儿喉炎一般多久能好》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'education'
    }, {
        name: '《不停哭闹怎么办》', man: '主讲人：xxx讲师', url: '../images/delete/video01.png', path: 'education'
      
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

    
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        let avatarUrl = res.userInfo.avatarUrl
        let nickName = res.userInfo.avatarUrl
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
      },
    })

    

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