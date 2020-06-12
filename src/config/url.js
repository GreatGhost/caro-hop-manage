import {env} from './env'

export const host = env.debbug?'http://47.103.123.130:8808':'https://newapi.xcbwl.cn:4433';
// export const host = env.debbug?'http://192.168.10.45:8808':'https://newapi.xcbwl.cn:4433';//孙铭泽
// export const host = env.debbug?'http://192.168.10.36:8808':'https://newapi.xcbwl.cn:4433';//董明
//http://192.168.10.36:8808
// http://192.168.10.5:8808
// http://192.168.10.32:8808
// http://192.168.10.45:8808

export const xcbHost=env.debbug?'http://47.103.123.130:8899' : 'https://api.xcbwl.cn'

export const qiniuyHost=env.debbug?"http://47.103.123.130:8011/":"https://tools.xcbwl.cn/"