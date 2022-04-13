// pages/new_course/new_course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseGroupList:[
      {
        'id':1,
        'name':'全部'
      },{
        'id':2,
        'name':'科学'
      },{
        'id':3,
        'name':'美术'
      },{
        'id':4,
        'name':'主持'
      },{
        'id':5,
        'name':'音乐'
      },{
        'id':6,
        'name':'舞蹈'
      },{
        'id':7,
        'name':'体育'
      }
    ],  // 导航栏数据
    navId:1 , //导航标识
    images:['/static/images/mine.png'],
    course_data:[], //课程信息
    kexue:[{
      'id':1,
      'name':'科技',
      'src':'/static/images/keji/keji_1.jpg'
    },{
      'id':5,
      'name':'机器人',
      'src':'/static/images/jiqiren/jiqiren.jpg'
    }],//机器人信息, //科学信息
    meishu:[{
      'id':2,
      'name':'美术',
      'src':'/static/images/meishu/meishu_1.jpg'
    }],  //美术信息
    zhuchi:[{
        'id':3,
        'name':'主持',
        'src':'/static/images/zhuchi/zhuchi_1.jpg'
      }], //主持信息
    yinyue:[],//音乐信息
    wudao:[{
      'id':4,
      'name':'舞蹈',
      'src':'/static/images/wudao/wudao_1.jpg'
    }],//舞蹈信息
    tiyu:[], //体育信息
    all:[], //全部信息
    CourseList:[],  //当前栏目信息
    count:0,
    course_data:[] //课程信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(),
    this.getCourseList(this.data.navId)
    console.log(this.data.navId)
  },

  getData:function(){
    this.data.all=this.data.all.concat(this.data.zhuchi,this.data.meishu,this.data.kexue,this.data.yinyue,this.data.wudao,this.data.tiyu)
  },

  //获取当前列表数据
  getCourseList(navId){
    this.setData({
      CourseList:[]
    })
    if (navId==1){
      this.setData({
        CourseList:this.data.all
      })
    }
    if (navId==2){
      this.setData({
        CourseList:this.data.kexue
      })
    }
    if (navId==3){
      this.setData({
        CourseList:this.data.meishu
      })
    }if (navId==4){
      this.setData({
        CourseList:this.data.zhuchi
      })
    }if (navId==5){
      this.setData({
        CourseList:this.data.yinyue
      })
    }
    if (navId==6){
      this.setData({
        CourseList:this.data.wudao
      })
    }
    if (navId==7){
      this.setData({
        CourseList:this.data.tiyu
      })
    }
  },

  // 点击切换导航的回调
  changeNav(event){
    console.log(event.currentTarget.id)
    let navId = event.currentTarget.id; // 通过id向event传参的时候如果传的是number会自动转换成string
    this.setData({
      navId: navId>>>0
    })
    this.getCourseList(navId)
  },
  // 点击切换页面
  changePag(event){
    console.log(event.currentTarget.id);
    if(event.currentTarget.id == 1){
      wx.navigateTo({
        url: '/page/lesson/kexue/kexue',
      })
    }
    if(event.currentTarget.id == 2){
      wx.navigateTo({
        url: '/page/lesson/meishu/meishu',
      })
    }
    if(event.currentTarget.id == 3){
      wx.navigateTo({
        url: '/page/lesson/zhuchi/zhuchi',
      })
    }
    if(event.currentTarget.id == 4){
      wx.navigateTo({
        url: '/page/lesson/wudao/wudao',
      })
    }
    if(event.currentTarget.id == 5){
      wx.navigateTo({
        url: '/page/lesson/jiqiren/jiqiren',
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