import { combineReducers } from "redux";

// import { testReducer } from './redux/test'
import { userRedux } from './redux/userReducer'
import { commRedux } from './redux/commReducer'
import { listRedux } from './redux/listReducer'

export default combineReducers({
    userRedux,commRedux,listRedux
})