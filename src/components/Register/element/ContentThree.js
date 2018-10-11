import React, { PureComponent } from 'react'
import {Icon} from 'antd'
import Style from '../register.less'
export default class ContentThree extends PureComponent {
  render() {
    return (
      <div className={Style.contentThree}>
        <p><Icon type="check-circle-o" /></p>
        <p>注册成功</p>
      </div>
    )
  }
}
