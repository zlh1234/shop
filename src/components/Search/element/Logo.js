import React, { PureComponent } from 'react'
import Style from '../search.less'
export default class Logo extends PureComponent {
  render() {
    return (
      <div className={Style.logo}>
        <a
        style={{backgroundImage: 'url('+require('../../../static/logo.png')+')'}}
        href="javascript:;" title="logo">siteLogo</a>
      </div>
    )
  }
}
