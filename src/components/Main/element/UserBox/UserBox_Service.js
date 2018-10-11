import React, { PureComponent } from 'react'

import {Icon} from 'antd'
import Style from '../../main.less'
export default class UserBox_Service extends PureComponent {
  render() {
    const service = this.props.service;
    return (
      <div className={Style.service}>
        <div className={Style.serviceBox}>
          <ul className="clearfix">
            {
              service.map(v=>{
                return (
                  <li key={v._id}>
                    <a href="javascript:;">
                      <Icon type={v.icon} />
                      <p>{v.name}</p>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
