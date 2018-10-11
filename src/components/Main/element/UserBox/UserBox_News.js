import React, { PureComponent } from 'react'

import Style from '../../main.less'

export default class UserBox_News extends PureComponent {
  state = {
    lineLeft: 0,
    index:0
  }
  /**
   * @param {Number} v 当前left的位置
   * @param {Number} i 判断是促销还是公告
   */
  mouseEnter=e=>{
    let index = parseInt(e.currentTarget.getAttribute('data-index'),10);
    let lineLeft = index ? 44 : 0;
    this.setState({
      lineLeft,
      index
    });
  }
  render() {
    const news = this.props.news;
    return (
      <div className={Style.news}>
        <div className={Style.tabHeader}>
          <a onMouseEnter={this.mouseEnter}
              className={Style.tabBtn}
              href="javascript:;"
              data-index="0">促销</a>
              
          <a onMouseEnter={this.mouseEnter}
              className={[Style.tabBtn,Style.separate].join(' ')}
              href="javascript:;"
              data-index="1">公告</a>
          <div style={{left:this.state.lineLeft+'px'}} className={Style.tabLine}></div>
          <a className={Style.more} href="javascript:;">更多</a>
        </div>
        <div className={Style.wrap}>
          <div className={Style.content}>
            <ul className={Style.ul}>
              {
                news.length && news[this.state.index].data.map((v,i)=>{
                  return (
                    <li className={Style.li} key={i}>
                      <a href="javascript:;" title={v}>{v}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
