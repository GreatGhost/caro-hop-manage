import {SAVE_USER_INFO} from '../constants/user'

const INITIAL_STATE={
    userInfo:{}
}

export default function user (state=INITIAL_STATE,action){
    switch(action.type){
        case SAVE_USER_INFO:
            return {
                ...state,
                userInfo:action.user
            }
            break;
        default:
            return state;
    }
}