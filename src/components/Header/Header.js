import React, { PureComponent } from 'react'

import Style from './header.less'

import MenuLeft from './element/MenuLeft'
import MenuRight from './element/MenuRight'
import { enterpriseData,customerData,siteNavData,areaList } from '../Common/StaticData'

class Header extends PureComponent {
  render() {
    return (
      <div className={ Style.header }>
        <div className={[Style.headerBar,'clearfix'].join(' ')}>
          <MenuLeft areaList={areaList}></MenuLeft>
          <MenuRight
           user={this.props.user}
           enterpriseData={enterpriseData}
           customerData={customerData} 
           siteNavData={siteNavData}></MenuRight>
        </div>
      </div>
    )
  }
}
export default Header