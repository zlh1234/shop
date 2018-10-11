import React, { PureComponent } from 'react'

import Style from '../../main.less'
export default class Banner extends PureComponent {
  render() {
    const banner = this.props.banner;
    return (
      <div className={Style.banner}>
        <ul>
          {
            banner.map(v=>{
              return (
                <li key={v._id}>
                  <a href="javascript:;" title={v.name}>
                    <img src={require(`../../../../static/main/${v.src}`)} alt={v.name}/>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
