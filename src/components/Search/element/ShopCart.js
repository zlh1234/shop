import React, { PureComponent } from 'react'

import Style from '../search.less'
export default class ShopCart extends PureComponent {
  state = {
    hover:false
  }
  /**
   * 添加hover类，显示
   */
  mouseEnter=()=>{
    this.setState({
      hover:true
    });
  }
  /**
   * 移除hover类，隐藏
   */
  mouseLeave=()=>{
    this.setState({
      hover:false
    });
  }
  render() {
    return (
      <div className={Style.shopCart}>
        <div className={[Style.cartBox,this.state.hover && Style.hover].join(' ')}
        onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className={Style.cartBtn}>
            <i style={{marginRight:"3px"}} className="iconfont icon-cart"></i>
            <a href="javascript:;">我的购物车</a>
          </div>
          <div className={Style.dropdown}>
            {
              false ? 
               (
                <div className={Style.hasProduct}>
                  <p>购物车有商品</p>
                </div>
               ) : (
                <div className={[Style.notProduct,'clearfix'].join(' ')}>
                  <div style={{backgroundImage:'url('+require('../../../static/cart.png')+')'}} className={Style.img}></div>
                  <p>购物车中还没有商品，赶紧选购吧！</p>
                </div>
               )
            }
          </div>
        </div>
      </div>
    )
  }
}
