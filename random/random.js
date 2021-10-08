// random/random.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 9,
    
      a1: "",
      b1: "",
      c1: "",
      d1: "",
      e1: "",
      f1: "",
      f2: "",
      f3: "",
      f4: "",
      f5: "",
      f6: "",
      f7: "",
      g: ""
    
  },

  oneNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 1) {
        n += 1;
      }
    }
    return n;
  },

  twoNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 2) {
        n += 1;
      }
    }
    return n;
  },

  threeNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 3) {
        n += 1;
      }
    }
    return n;
  },

  fourNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 4) {
        n += 1;
      }
    }
    return n;
  },

  fiveNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 5) {
        n += 1;
      }
    }
    return n;
  },

  sixNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 6) {
        n += 1;
      }
    }
    return n;
  },


  reload(){
    if (this.data.count>0) {
      var
      a = Math.floor(Math.random() * 6) + 1,
      b = Math.floor(Math.random() * 6) + 1,
      c = Math.floor(Math.random() * 6) + 1,
      d = Math.floor(Math.random() * 6) + 1,
      e = Math.floor(Math.random() * 6) + 1,
      f = Math.floor(Math.random() * 6) + 1;
      var arr = [a,b,c,d,e,f]
      this.setData({a:a,b:b,c:c,d:d,e:e,f:f})
      this.setData({
        one: this.oneNum(arr),
        two: this.twoNum(arr),
        three: this.threeNum(arr),
        four: this.fourNum(arr),
        five: this.fiveNum(arr),
        six: this.sixNum(arr)
      })
      if (four == 1 && one + two + three + four + five + six != 21 && one < 4 && two < 4 && three < 4 && five < 4 && six < 4) {
        this.setData({
          a1 : "一秀",
        })
      }
      if (four == 2 && one < 4 && two < 4 && three < 4 && five < 4 && six < 4) {
        this.setData({
          b1 : "二举",
        })
      }
      if (four == 3) {
        this.setData({
          c1 : "三红",
        })
      }
      if (two == 4|| three == 4 || one == 4|| five == 4 || six==4) {
        this.setData({
          d1 : "四进",
        })
      }
      if (one == 1 && two == 2 && three == 1 && four == 2 && five == 1 && six == 2) {
        this.setData({
          e1 : "对堂",
        })
      }
      if (four === 4) {
        this.setData({
          f1 : "状元",
        })
      }
      if (five == 5 || three == 5|| two == 5|| one == 5|| six == 5) {
        this.setData({
          f2 : "五子登科",
        })
      }
      if (four == 5) {
        this.setData({
          f3 : "六杯黑",
        })
      }
      if (six == 6 || five == 6 ||three == 6 || two == 6) {
        this.setData({
          f4 : "五红",
        })
      }
      if (one == 6) {
        this.setData({
          f5 : "遍地锦",
        })
      }
      if (four == 6) {
        this.setData({
          f6 : "六杯红",
        })
      }
      if (four == 4 && one == 2) {
        this.setData({
          f7 : "金花",
        })
      }
      if (four == 0 && one < 4 && two < 4 && four < 4 && five < 4 && six < 4 && three < 4) {
        this.setData({
          g : "谢谢参与",
        })
      }
      var temp = this.data.count - 1;
      this.setData({
      count : temp
    })
    }else{
      this.setData({
        recode : false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var
      a = Math.floor(Math.random() * 6) + 1,
      b = Math.floor(Math.random() * 6) + 1,
      c = Math.floor(Math.random() * 6) + 1,
      d = Math.floor(Math.random() * 6) + 1,
      e = Math.floor(Math.random() * 6) + 1,
      f = Math.floor(Math.random() * 6) + 1;
    var arr = [a,b,c,d,e,f]
    this.setData({a:a,b:b,c:c,d:d,e:e,f:f})

    this.setData({
      one: this.oneNum(arr),
      two: this.twoNum(arr),
      three: this.threeNum(arr),
      four: this.fourNum(arr),
      five: this.fiveNum(arr),
      six: this.sixNum(arr)
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