/**
 * 包含n个reducer函数 : 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from "./action-types";
import {getRedirectPath} from "../utils";

const initUser = {
    username:'',
    type:'',
    msg:'',
    redirectTo:''
}

function user(state = initUser,action){

    switch (action.type){
        case AUTH_SUCCESS://认证成功
            const redirectTo = getRedirectPath(action.data.type,action.data.header)
            return {...action.data,redirectTo: redirectTo}
        case ERROR_MSG://错误信息提示
            return {...state,msg: action.data}

        default:
            return state;
    }
}

export default combineReducers({
   user
})