
import { message } from 'antd'
import http from '../util/http'

const USER_SUCCESS = 'USER_SUCCESS';//登录
const USER_ERROR = 'USER_ERROR';//注册
const USER_LOADING = 'USER_LOADING';//loading开启
const USER_LOGOUT = 'USER_LOGOUT';//退出登录
const REGISTER_CHECK = 'REGISTER_CHECK';//注册的用户名已被占用
const REGISTER_NEXT = 'REGISTER_NEXT';//下一步
const REGISTER_PREV = 'REGISTER_PREV';//上一步
const REGISTER_DONE = 'REGISTER_DONE';//注册结束


const initState = {
  loading:false,
  data:{
    code:1,//1-error 0-success
    message:'',
    user:{}
  },
  reg:{
    current: 0,
    checkUsername:true,//用户名是否可用
    username:'',
    password:'',
    nickname:'',
    mail:''
  }
}

export function userRedux(state=initState,action){
  switch(action.type){
    case USER_SUCCESS://登录成功
      return {...state,loading:false,data:{...action.payload,message:''}}
    case USER_ERROR://登录失败
      message.error(action.payload.message);//错误提示
      return {...state,loading:false,data:{...action.payload,user:{}}}
    case USER_LOGOUT://退出登录
      return {...initState}
    case USER_LOADING://显示loading
      return {...state,loading:true}
    case REGISTER_CHECK://检查用户名是否可用
      return {...state,loading:false,reg:{...state.reg,checkUsername:false}}
    case REGISTER_NEXT://下一步
      return {...state,loading:false,reg:{...state.reg,...action.payload,current:state.reg.current+1}}
    case REGISTER_PREV://上一步
      return {...state,loading:false,reg:{...state.reg,current:state.reg.current-1}}
    case REGISTER_DONE:
      return {...state,loading:false,reg:{...initState.reg}}
    default:
      return state
  }
}

/**
 * 登录
 * @param {Object} 表单数据
 */
export function login({username,password,remember}){
  return async dispatch=>{
    await dispatch({type:USER_LOADING});//开启loading
    const res = http.post('user/login',{username,password});
    res.then(data=>{
      if(data.code === 0){//成功
        if(remember){//记住密码
          localStorage.setItem('username',username);
          localStorage.setItem('password',password);
        }
        dispatch({type:USER_SUCCESS,payload:data});
      }else{//失败
        dispatch({type:USER_ERROR,payload:data});
      }
    },err=>{message.error('服务器出错!');});
  }
}

/**
 * 注册
 */
export function register(data){
  return async dispatch=>{
    await dispatch({type:USER_LOADING});//开启loading
    const res = http.post('user/register',data);
    res.then(data=>{
      if(data.code===0){
        dispatch({type:REGISTER_NEXT,payload:{}});
      }else{
        message.error(data.message);
      }
    })
  }
}
/**
 * 注册完成，清空注册的数据
 */
export function registerDone(){
  sessionStorage.removeItem('identifying');
  return {type:REGISTER_DONE}
}

/**
 * 注册时 检查用户名是否可用
 */
export function checkUser({ username,password,nickname,mail }){
  return async dispatch=>{
    await dispatch({type:USER_LOADING});//开启loading
    const res = http.post('user/checkusername',{username});
    res.then(data=>{
      if(data!==0){
        dispatch({type:REGISTER_CHECK});
      }else{
        let d = { username,password,nickname,mail };
        dispatch({type:REGISTER_NEXT,payload:d});
      }
    })
  }
}

/**
 * 发送验证码
 */
export function sendCode(mail){
  return dispatch=>{
    const res = http.post('user/sendMaila',{mail:mail});
    res.then(data=>{
      if(!data.code){
        sessionStorage.setItem('identifying',data.identifyingCode);
      }else{
        message.error(data.message);//错误提示
      }
    });
  }
}


/**
 * 上一步
 */
export function prev(){
  return { type:REGISTER_PREV }
}

/**
 * 下一步
 */
export function next(){
  return { type:REGISTER_NEXT }
}


//退出登录
export function logout(){
  return async dispatch=>{
    await dispatch({type:USER_LOADING});//开启loading
    await setTimeout(function(){
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      dispatch({type:USER_LOGOUT});
    },1000);
  }
}
