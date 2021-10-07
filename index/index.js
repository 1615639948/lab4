const app = getApp()

Page({
  data: {
    muti:0,
    RoomName:"",
    Roomcode:"",
    People : 0
  },
  to_home_name(){
    this.setData({
       muti : 1
    })
  },
  to_StandAloneGame(){
    wx.navigateTo({
      url: '../stand_alone_game/stand_alone_game',
    })
  },
  to_rule(){
    wx.navigateTo({
      url: '../rule/rule',
    })
  },

  Go_Back(){
    this.setData({
      muti : 0
   })
   this.setData({
    RoomName:"",
    Roomcode:"",
    People : 0
 })
  },
  Input_3: function(e){
    var temp = e.detail.value
    this.setData({
      RoomName : temp
   })
  },
  Input_2: function(e){
    var temp = e.detail.value
    this.setData({
      Roomcode : temp
   })
  },
  Input_1: function(e){
    var temp = e.detail.value
    this.setData({
      People : temp
   })
  },

  onLoad() {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },


  

})
