
import {data} from './goodsList'
const GET_LIST = 'GETLIST';
const IS_LOADING = 'ISLOADING';

const initState = {
    isLoading:false,
    list:data
};

export function listRedux(state=initState,action){
    switch(action.type){
        case GET_LIST:
            let arr = [];
            let n = state.list.length;
            if(n < 45){
                for(let i = 0;i < 10;i++){
                    let o = {
                        _id:n+i+1,
                        name:'妙管家（Magic Amah） 台湾进口浓缩中性洗衣液不伤手无荧光剂薰衣草4000g 浅紫色 8斤'
                    }
                    arr.push(o);
                }
                console.log(arr);
                return {...state,isLoading:false,list:[...state.list,...arr]}
            }
            return state
        case IS_LOADING:
            return {...state,isLoading:true}
        default:
            return state
    }
}

/**
 * 获取数据
 */
export function getList(){
    return async dispatch=>{
        await dispatch({type:IS_LOADING});//开启loading
        await setTimeout(function(){
            dispatch({type:GET_LIST});
        },200);
    }
}