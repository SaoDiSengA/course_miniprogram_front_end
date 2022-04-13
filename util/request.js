//发送ajax请求

import config from "./config";

export default (url, data={}, method='GET') => {
  return new Promise((resolve,reject) => {
    
    wx.request({
      url : config.mobileHost + url,
      data,
      method,
      header:{
        cookie: wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1):''
      },
      success: (res) => {
        //console.log('请求成功:',res);
        if(data.isLogin){
          //将用户的cookie存入至本地
          wx.setStorage({
            data: res.cookies,
            key: 'cookies',
          })
        }
        resolve(res.data);  //resolve修改promise的状态为成功状态resolved
      },
      fail : (err) => {
       // console.log('请求失败:',err);
       reject(err); //reject修改promise的状态为成功状态rejected
      },
    })
  })
}



