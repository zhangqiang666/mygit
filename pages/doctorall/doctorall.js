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
    doctordata: [{
      content: '孩子的饮食很重要，除了食物选择还要注意这个', imgurl: '../images/delete/doctor01.png', babay: 'pcbaby首页', time: '55分钟前', path: 'doctordetail'
    }, {
      content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: '../images/delete/doctor02.png', babay: 'pcbaby首页', time: '55分钟前', path: 'doctordetail'
    }, {
      content: '孩子的饮食很重要，除了食物选择还要注意这个', imgurl: '../images/delete/doctor03.png', babay: 'pcbaby首页', time: '55分钟前', path: 'doctordetail'
    }, {
      content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: '../images/delete/doctor04.png', babay: 'pcbaby首页', time: '55分钟前', path: 'doctordetail'
    }, {
      content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: '../images/delete/doctor05.png', babay: 'pcbaby首页', time: '55分钟前', path: 'doctordetail'
    

    }],

    navdata:[{
      name: '全部', isClick:'false',id:'0'
    },{
        name: '母乳喂养', isClick: '',id:'1'
      }, {
        name: '语言发育', isClick: '', id: '2'
    }, {
        name: '家庭早教', isClick: '',id:'3'
      }, {
        name: '儿科口腔', isClick: '', id: '4'
    }, {
        name: '皮肤护理', isClick: '', id: '5'
      }, {
        name: '隔代育儿', isClick: '', id: '6'
    }, {
        name: '性格发育', isClick: '', id: '7'
    }],
    listdata: [{
      name: '近2岁后，宝宝进入叛逆期，什么事情都跟家长反着来，不肯好好吃饭，不愿乖乖睡觉，面对2岁的小魔鬼，父母该怎么办好呢？', time: '发起了提问（男宝2018-10-20）', can: '2000次阅读'
    }, {
      name: '近2岁后，宝宝进入叛逆期，什么事情都跟家长反着来，不肯好好吃饭，不愿乖乖睡觉，面对2岁的小魔鬼，父母该怎么办好呢？', time: '发起了提问（男宝2018-10-20）', can: '2000次阅读'
    }, {
      name: '近2岁后，宝宝进入叛逆期，什么事情都跟家长反着来，不肯好好吃饭，不愿乖乖睡觉，面对2岁的小魔鬼，父母该怎么办好呢？', time: '发起了提问（男宝2018-10-20）', can: '2000次阅读'
    }, {
      name: '近2岁后，宝宝进入叛逆期，什么事情都跟家长反着来，不肯好好吃饭，不愿乖乖睡觉，面对2岁的小魔鬼，父母该怎么办好呢？', time: '发起了提问（男宝2018-10-20）', can: '2000次阅读'
    }, {
      name: '近2岁后，宝宝进入叛逆期，什么事情都跟家长反着来，不肯好好吃饭，不愿乖乖睡觉，面对2岁的小魔鬼，父母该怎么办好呢？', time: '发起了提问（男宝2018-10-20）', can: '2000次阅读'
    }, {
      name: '近2岁后，宝宝进入叛逆期，什么事情都跟家长反着来，不肯好好吃饭，不愿乖乖睡觉，面对2岁的小魔鬼，父母该怎么办好呢？', time: '发起了提问（男宝2018-10-20）', can: '2000次阅读'

    
    }],
    doctorlist: [{
      content: '3次上门咨询/一周答疑/1次发育评测/产后开奶/母乳指导/科学奶 ', title: '私人医生半年套餐', imgurl: '../images/touxiang.png', babay: '00', maxbaby: '￥1500.', time: '已230135位预约', path: 'doctordetail'
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
   
  click: function (e) {
    var that=this;
    //获取到name对应的值
    var index = e.currentTarget.dataset.id;
    console.log("a", index);
    console.log(this.data.navdata)
    //var isclick='true'
   // this.data.navdata.push(isclick)
     var navdata=[];
    
    this.data.navdata.forEach((a,i)=>{
     var obj={
       name:a.name,
       isClick:"",
       id:i

     }
     navdata.push(obj)
     console.log(navdata)
     that.setData({
       navdata: navdata
     });
      
    if(i==index){
      obj.isClick="false"
      that.setData({
        navdata: navdata
      });
    }
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
        console.log(res)
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