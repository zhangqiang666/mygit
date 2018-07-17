// pages/mybaby/mybaby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  babydata:[{
    url: '../images/touxiang.png', title:'Daniels',time:'2018-01-02'
  },{
      url: '../images/touxiang.png', title: 'Daniels', time: '2018-01-02'
  }],
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