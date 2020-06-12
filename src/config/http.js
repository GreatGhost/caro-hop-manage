import Taro , { Component } from '@tarojs/taro';
import {host} from './url'
import * as config from './config'
import md5 from '../util/md5';
import day from '../util/day';
function requestData(data){
    let token=config.getWXUserInfo().token||'';
    let userId=config.getWXUserInfo().userId||'';
    let openid=config.getSessionInfo().openId||'';
    let utime = day(new Date()).format('YYYY-MM-DD HH:mm:ss')
    let str ='user_id=' + userId + '&utime=' + utime
    let sign = md5.hexMD5(str)
    let publicData={
        token:token,
        userId:userId,
        sign:sign,
    }
    let reqData={}
    Object.assign(data,{openid:openid});
    Object.assign(reqData,publicData,{Data:data});
    return reqData;
}

export function post(url,param){
    url=host+url;
    return new Promise((resolve,reject)=>{
        let data=requestData(param);
        Taro.request({
            url:url, //仅为示例，并非真实的接口地址
            method:'POST',
            data: data,
            success(res){
                resolve(res.data);
            }
          })
    })
}
