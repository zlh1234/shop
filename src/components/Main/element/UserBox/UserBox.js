import React, { PureComponent } from 'react'
import Style from '../../main.less'

import UserBoxUser from './UserBox_User'
import UserBoxNews from './UserBox_News'
import UserBoxService from './UserBox_Service'

export default class UserBox extends PureComponent {
  render() {
    return (
      <div className={Style.userBox}>
        <UserBoxUser logout={this.props.logout} user={this.props.user}></UserBoxUser>
        <UserBoxNews news={this.props.news}></UserBoxNews>
        <UserBoxService service={this.props.service}></UserBoxService>
      </div>
    )
  }
}
