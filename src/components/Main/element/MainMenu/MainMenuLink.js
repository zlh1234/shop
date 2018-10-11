import React, { PureComponent } from 'react'

import { message } from 'antd';
import Style from '../../main.less'
export default class MainMenuLink extends PureComponent {
  /**
   * @param {String} v 当前点击的文字 
   */
  handleClick=e=>{
    let v = e.currentTarget.getAttribute('data-text');
    message.config({
      duration: 2,
      maxCount: 1,
    });
    message.success(v);
  }
  render() {
    const { item } = this.props.data;
    return (
      <div className={Style.mainMenuLink}>
        {
          item.map((v,i)=>{
            return (
              <span key={i}>
                <a href="javascript:;" onClick={this.handleClick} data-text={v}>{v}</a>
                <i className={[i === item.length-1 && Style.hide]}>/</i>
              </span>
            )
          })
        }
      </div>
    )
  }
}
