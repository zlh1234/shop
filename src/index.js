import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//redux
import {Provider} from 'react-redux'
import store from './store/store'

//路由
import {Switch,Route,BrowserRouter} from 'react-router-dom'

//resetCSS
import './static/style/reset.css'
import './index.css';

import Init from './components/Init/Init'
//组件
import Home from './containers/Home';  //首页
import Login from './containers/Login'; //登录
import Register from './containers/Register' //注册


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="app">
              <Init></Init>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
              </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
