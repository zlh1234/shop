import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {login} from '../../redux/userReducer'

@connect(state=>({
  user:state.userRedux
}),{login})

export default class Init extends PureComponent {
  componentWillMount(){
    let username = localStorage.getItem('username') || null;
    let password = localStorage.getItem('password') || null;
    let remember = true;
    if(username && password) this.props.login({username,password,remember});
  }
  render() {
    return (
      false && <div></div>
    )
  }
}
