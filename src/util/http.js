import axios from 'axios';
import qs from 'qs';
const http =  axios.create({
    withCredentials:false,
    timeout:20000
});

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
http.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

//请求拦截器
http.interceptors.request.use(function(req){
    //在请求发出之前进行一些操作
    const { method } = req;
    let _t = Date.parse(new Date())/1000;//10位时间戳
    //判断post还是get 分别对data和params做出操作
    if(method === "post"){
        let reqData = qs.parse(req.data);
        req.data = qs.stringify({
            ...reqData,
            "_t":_t
        });
    }else if(method === "get"){
        req.params = {
            ...req.params,
            "_t":_t
        }
    }
    req.url = `/shop/public/index.php/index/${req.url}`;
    return req;
},function(err){
    return Promise.reject(err);
});

//响应拦截器
http.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    const { status } = res;
    if((status >= 200 && status <= 300) || status === 304){
        // console.log(res);
        return res.data;
    }
},function(err){
    //Do something with response error
    return Promise.reject(err);
});

export default http