import {SAVE_USER_INFO,SAVE_WX_SESSION_INFO}from '../constants/user'

export const saveUserInfo=(user)=>{
    return {
        type:SAVE_USER_INFO,
        user:user
    }
}

