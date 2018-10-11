import React, { PureComponent } from 'react'

import Style from '../header.less'


class MenuLeft extends PureComponent {

  state = {
    nowIndex:1,
    hover:false
  }

  /**
   * 添加hover类，显示所有地区
   */
  mouseEnter=()=>{
    this.setState({
      hover:true
    });
  }
  /**
   * 移除hover类，隐藏所有地区
   */
  mouseLeave=()=>{
    this.setState({
      hover:false
    });
  }
  /**
   * 更改地区,点击之后关闭
   * @param {Number} v 当前选中的id
   */
  handleClick=e=>{
    let v = e.currentTarget.getAttribute('data-id');
    this.setState({
      nowIndex:v,
      hover:false
    });
  }
  render() {
    const areaList = this.props.areaList;
    return (
      <ul className={[Style.menuLeft,'clearfix'].join(' ')}>
        <li className={[this.state.hover && Style.hover]}
        onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className={Style.areaItem}>
              <i style={{fontSize:"12px",color:"#F10215"}} className="iconfont icon-map"></i>
              <span>{areaList[this.state.nowIndex-1].name}</span>
          </div>
          <ul className={[Style.dropdown,'clearfix'].join(' ')}>
            {
              areaList.map((v,i) => {
                return (<li key={v.id} className={[ this.state.nowIndex===v.id && Style.act ]}>
                    <a href="javascript:;" data-id={v.id} onClick={this.handleClick}>{v.name}</a>
                  </li>)
              })
            }
          </ul>
        </li>
      </ul>
    )
  }
}

export default MenuLeft
