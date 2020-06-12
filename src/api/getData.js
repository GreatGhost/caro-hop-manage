import {get,post} from '../config/http'
/**
 * 获取验证码
 * @param {*} payload
 */
export const getLoginCode=(param)=>post('/api/login/createVerCode',param);


/**
 * 手机号码+验证码登录
 * @param {*} payload
 */

export const loginByMobile=(param)=>post('/api/login/login',param);

/**
 * 授权获取手机号
 * @param {*} payload
 */

export const weChatLogin=(param)=>post('/api/login/weChatLogin',param);


/**
 * 一键登录
 * @param {*} payload
 */
export const decode=(param)=>post('/api/login/decode',param);

