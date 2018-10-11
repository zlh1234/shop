
import http from '../http'

const ADD = 'ADD';

let timer = null;
export function testReducer(state=10,action){
    switch(action.type){
        case ADD:
            return state+action.payload
        default:
            return state
    }
}

export function addFn(){
    return {type:ADD,payload:2}
}


export function addFn2(){
    clearTimeout(timer);
    return dispatch=>{
        timer = setTimeout(function(){
            dispatch(addFn())
        },2000);
    }
}

export function addFn3(){
    return async dispatch=>{
        let a = null;
        // const res = http.get('/shop/index.php',{
        //     params:{
        //         name:'zlh'
        //     }
        // });
        const res = http({
            url:'user/haha',
            method:'get',
            params:{
                name:'zlh'
            },
            headers:{
                'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8',
                'Accept' : 'application/json'
            }
        });
        await res.then(res=>{
            // console.log(res.data);
            a = res.data;
            dispatch({type:ADD,payload:2})
        });
        console.log(a);
    }
}