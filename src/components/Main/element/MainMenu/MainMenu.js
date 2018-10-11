import React, { PureComponent } from 'react'

import Style from '../../main.less'
import MainMenuRight from './MainMenuRight'
import MainMenuLink from './MainMenuLink'
export default class MainMenu extends PureComponent {
  state = {
    isShow:false,
    hover:null,
    data:{
      mItem:[]
    }
  }
  /**
   * @isShow {Boolean} 判断是否显示
   * @param {Object} data 给右边的内容
   * @param {Number} i 判断li的hover
   */
  mouseEnter=e=>{
    let data = e.currentTarget.getAttribute('data-content');
    let i = e.currentTarget.getAttribute('data-index');
    this.setState({
      isShow:true,
      hover:parseInt(i,10),
      data:data
    });
  }
  mouseLeave=()=>{
    this.setState({
      isShow:false,
      hover:null,
      data:{
        mItem:[]
      }
    });
  }
  render() {
    const mainMenuItem = this.props.mainMenu;
    return (
      <div className={Style.mainMenu} onMouseLeave={this.mouseLeave}>
        <ul className={Style.mainMenuLeft}>
            {
              mainMenuItem.map((v,i)=>{
                return (
                  <li key={v._id}
                  className={[this.state.hover === i && Style.hover]}
                  onMouseEnter={this.mouseEnter} data-content={v.data.mItem} data-index={i}>
                    <MainMenuLink data={v}></MainMenuLink>
                  </li>
                )
              })
            }
          </ul>
          {
            this.state.isShow && <MainMenuRight rightData={this.state.data}></MainMenuRight>
          }
      </div>
    )
  }
}
