import React, { PureComponent } from 'react'

import Style from '../search.less'
import NavItemList from './NavItemList'

export default class NavItem extends PureComponent {
  render() {
    const navItem = this.props.navItem;
    const keys = Object.keys(navItem);
    return (
      <div className={[Style.navItem,'clearfix'].join(' ')}>
        {
          keys.map((v,i)=>{
            return (
              <div key={i} className={[Style.group,'clearfix'].join(' ')}>
                <NavItemList list={navItem[v]}></NavItemList>
                <div className={[Style.line,i === 2 && Style.hide].join(' ')}></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

