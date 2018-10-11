

import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(reducers,applyMiddleware(thunk));
}else{
    store = createStore(reducers,compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
};

export default store