import React, { PureComponent } from 'react'
import Style from '../../main.less'

export default class MainMenuRight extends PureComponent {
  render() {
    const data = this.props.rightData ? this.props.rightData : null;
    return (
      <div className={Style.mainMenuRight}>
          <p>{data}</p>
      </div>
    )
  }
}
