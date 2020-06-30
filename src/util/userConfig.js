import localStorage from './localStorage';
import utilStore from './utilStore'

export function isLogin(){
    let userInfo=utilStore.getItem(localStorage.loginUser);
    return userInfo && userInfo.userId?true:false;
}

export function getUserInfo(){
    return utilStore.getItem(localStorage.loginUser);
}

//角色是总部运营人员
export function isManager(){
    return getUserInfo().rollId===1;
}

//角色是老板
export function isBoss(){
    return getUserInfo().rollId===0
}

//角色是店长
export function isShopOwner(){
    return getUserInfo().rollId===2;
}