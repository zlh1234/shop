import React, { PureComponent } from 'react'
import LoginBox from '../../components/Login/LoginBox'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import {login} from '../../redux/userReducer'

@connect(state=>({
  user:state.userRedux
}),{login})

export default class Index extends PureComponent {
  render() {
    return (
      !this.props.user.data.code
       ?
        (<Redirect to="/"></Redirect>)
       :
        (<div style={{position: "relative",height:"100%",width: "100%",background: "#F0F3EF"}}>
          <LoginBox user={this.props.user} login={this.props.login}></LoginBox>
        </div>)
    )
  }
}

