//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../images/word/banner02.png',
      '../images/word/banner02.png',
      '../images/word/banner02.png'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 5000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navdata:[{
      name: '随身医生', url:'../images/word/ssdoctor.png',path:'ssdoctor'
    },{
        name: '视频门诊', url: '../images/word/spmz.png' ,path:'spmz'
    },{
        name: '就医通道', url: '../images/word/jytd.png',path:'greendoctor'
    },{
        name: '育儿课堂', url: '../images/word/yzjy.png',path:'education'
    }],
    listdata:[{
      content: '孩子的饮食很重要，除了食物选择还要注意这个', imgurl:'https://s6.postimg.cc/vi3p08va9/QQ_20180706113134.png',babay:'pcbaby首页',time:'55分钟前',path:'detail'
      },{
        content: '孩子该如何补钙好？不懂赶紧过来了解下', imgurl: 'https://s6.postimg.cc/baq97yd8h/QQ_20180706113213.png', babay: 'pcbaby首页', time: '55分钟前',path:'detail'
      
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
        url: "../"+path+"/"+path+"",
      })


  },

  /**
       * 设置用户授权
       * scopeType:权限类型(userInfo/werun)
       * fun:回调函数，表示需要刷新的内容
       */
  // getdata(scopeType, fun) {
  //   var _this = this;



     
  //   console.log(this)


  //   wx.getSetting({
  //     success: result => {
  //       if (result.authSetting['scope.' + scopeType]) {
  //         _this.globalData.authType[scopeType] = true;
  //         fun();
  //       } else {
  //         wx.authorize({
  //           scope: 'scope.' + scopeType,
  //           success(res) {
  //             _this.globalData.authType[scopeType] = true;
  //             fun();
  //           },
  //           fail() {
  //             wx.showModal({
  //               title: '提示',
  //               content: '请允许授权以便为你提供更好的服务',
  //               showCancel: false,
  //               success: function () {
  //                 wx.openSetting({
  //                   success: (res) => {
  //                     if (res.authSetting['scope.' + scopeType]) {
  //                       _this.globalData.authType[scopeType] = true;
  //                       fun();
  //                     } else {
  //                       _this.globalData.authType[scopeType] = false;
  //                       _this.validateAuthorize(scopeType, fun);
  //                     }
  //                   },
  //                   fail() {
  //                     _this.globalData.authType[scopeType] = false;
  //                     _this.validateAuthorize(scopeType, fun);
  //                   }
  //                 });
  //               }
  //             })
  //           }
  //         });
  //       }
  //     }
  //   })
  // },
  //用户授权
  // onGotUserInfo(e) {
  //   console.log(e)
  //   if (e.detail.userInfo != null) {    //用户点击允许授权
  //     app.imageUrl = e.detail.userInfo.avatarUrl,
  //       app.nickName = e.detail.userInfo.nickName,
  //       app.authorize = true;
  //   }
  // },

   
  onLoad: function () {
    var that=this
    //that.getdata();
    var that = this;

     
     
    console.log(that.data)
    console.log(that)
    wx.setStorageSync('qiang', that.data)
    // that.onGotUserInfo(this);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }

      
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo

 


    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  

})
