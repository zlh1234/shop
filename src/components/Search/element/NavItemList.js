import React, { PureComponent } from 'react'


export default class NavItemList extends PureComponent{
  render() {
    return (
      <ul className="clearfix">
        {
          this.props.list.map((v,i)=><li key={i} ><a href="javascript:;">{v}</a></li>)
        }
      </ul>
    )
  }
}