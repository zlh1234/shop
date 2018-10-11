import React, { PureComponent } from 'react'
import Style from './login.less'

import FormBox from './FormBox'


class LoginBox extends PureComponent {
  render() {
    return (
      <div className={Style.login}>
        <FormBox user={this.props.user} login={this.props.login}></FormBox>
      </div>
    )
  }
}



export default LoginBox