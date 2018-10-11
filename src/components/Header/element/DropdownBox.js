import React, { PureComponent } from 'react'
import Style from '../header.less'
class DropdownBox extends PureComponent {
  render() {
    return (
      <div className={[Style.list,'clearfix'].join(' ')}>
        {
          this.props.list.map((v,i)=>{
            return (
              <span key={i}>
                <a href="javascript:;">{v}</a>
              </span>
            )
          })
        }
      </div>
    )
  }
}
export default DropdownBox