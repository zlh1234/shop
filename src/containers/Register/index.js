
import React, { PureComponent } from 'react'

import RegisterBox from '../../components/Register/Register'
import {connect} from 'react-redux'

import {checkUser,prev,sendCode,changeBtn,register,registerDone} from '../../redux/userReducer'

@connect(state=>({
  user:state.userRedux
}),{checkUser,prev,sendCode,changeBtn,register,registerDone})

export default class Index extends PureComponent {
  render() {
    return (
      <div style={{position: "relative",height:"100%",width: "100%",background: "#F0F3EF"}}>
        <RegisterBox 
          { ...this.props }
          sendCode={this.props.sendCode}></RegisterBox>
      </div>
    )
  }
}
