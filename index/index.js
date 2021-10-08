const app = getApp()


Page({
  data: {
    muti: 0,
    RoomName: "",
    Roomcode: "",
    People: 0,

  },
 
  to_home_name() {
    this.setData({
      muti: 1
    })
  },
  to_StandAloneGame() {
    wx.navigateTo({
      url: '../stand_alone_game/stand_alone_game',
    })
  },
  to_rule() {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },

  Go_Back() {
    this.setData({
      muti: 0
    })
    this.setData({
      RoomName: "",
      Roomcode: "",
      People: 0
    })
  },

  to_Multiplayer_game(){
    wx.navigateTo({
      url: '../Multiplayer_game/Multiplayer_game',
    })
  },

  Input_3: function (e) {
    var temp = e.detail.value
    this.setData({
      RoomName: temp
    })
    app.globalData.RoomName = this.data.RoomName
    console.log(app.globalData.RoomName)
  },
  Input_2: function (e) {
    var temp = e.detail.value
    this.setData({
      Roomcode: temp
    })
    app.globalData.Roomcode = this.data.Roomcode
    console.log(app.globalData.Roomcode)
  },
  Input_1: function (e) {
    var temp = e.detail.value
    this.setData({
      People: temp
    })
    app.globalData.People = this.data.People
    console.log(app.globalData.People)
  },
})