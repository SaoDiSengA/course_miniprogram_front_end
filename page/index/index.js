//index.js
const app = getApp()

Page({
  data :{
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
  getData:function(){
    this.data.all=this.data.all.concat(this.data.zhuchi,this.data.meishu,this.data.kexue,this.data.yinyue,this.data.wudao,this.data.tiyu)
  },
getCourseList(navId){
    this.setData({
      CourseList:this.data.all
    })
    console.log(this.data.all)
  },
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
onLoad: function (options) {
  this.getData(),
  this.getCourseList(this.data.navId)
  console.log(this.data.navId)
}
})