const loaclStorage = require("../util/localStorage")


//获取用户信息
export function getWXUserInfo() {
    let userInfo = wx.getStorageSync(loaclStorage.loginUser) || {}
    return userInfo
}
// 
export function getSessionInfo() {
    let userInfo = wx.getStorageSync(loaclStorage.loginSessionInfo) || {};
    return userInfo;
}