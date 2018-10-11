import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'
import Style from '../header.less'

import DropdownBox from './DropdownBox'


class MenuRight extends PureComponent {
  state = {
    hover:0//显示对应的下拉框
  }
  /**
   * 添加hover类，显示下拉框
   * @param {Number} v 当前所选的索引值
   */
  mouseEnter=(e)=>{
    let v = e.currentTarget.getAttribute("data-currindex");
    this.setState({
      hover:parseInt(v,10)
    });
  }
  /**
   * 移除hover类，隐藏下拉框
   */
  mouseLeave=()=>{
    this.setState({
      hover:0
    });
  }
  /**
   * 前往登录
   */
  toLogin=()=>{
    this.props.history.push('/login');
  }
  /**
   * 前往注册
   */
  toRegister=()=>{
    this.props.history.push('/register');
  }
  render() {
    const enterpriseData = this.props.enterpriseData;
    const customerData = this.props.customerData;
    const siteNavData = this.props.siteNavData;
    const data = this.props.user.data;
    return (
      <ul className={[Style.menuRight]}>
        <li>
          {
            !data.code ? 
              (<div className={Style.areaItem}>
                <a href="javascript:;">{data.user.user_nickname}</a>
              </div>) : 
              (<div className={Style.areaItem}>
                <a onClick={this.toLogin} href="javascript:;">您好,请登录</a>
                <a href="javascript:;" onClick={this.toRegister} className={Style.regLink}>免费注册</a>
              </div>)
          }
        </li>

        <li className={Style.line}></li>
        <li>
          <div className={Style.areaItem}>
              <a href="javascript:;">我的订单</a>
          </div>
        </li>

        <li className={Style.line}></li>
        <li>
          <div className={Style.areaItem}>
              <a href="javascript:;">我的购物车</a>
          </div>
        </li>

        <li className={Style.line}></li>
        <li className={[this.state.hover === 1 && Style.hover]} data-currindex={1}
        ref="gaga"
        onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className={Style.areaItem}>
              <span>企业采购</span>
              <i style={{fontSize:"12px"}} className="iconfont icon-moreunfold"></i>
          </div>
          <ul className={[Style.dropdown1,'clearfix'].join(' ')}>
            {
              enterpriseData.map((v,i)=>{
                return (
                  <li key={i}><a href="javascript:;">{v}</a></li>
                )
              })
            }
          </ul>
        </li>

        <li className={Style.line}></li>
        <li className={[this.state.hover === 2 && Style.hover]} data-currindex={2}
        onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className={Style.areaItem}>
              <span>客户服务</span>
              <i style={{fontSize:"12px"}} className="iconfont icon-moreunfold"></i>
          </div>
          <ul className={Style.dropdown2}>
            {
              customerData.map((v,i)=>{
                return (
                  <li key={i} className="clearfix">
                    <p className={Style.title}>{v.name}</p>
                    <DropdownBox list={v.list}></DropdownBox>
                  </li>
                )
              })
            }
          </ul>
        </li>

        <li className={Style.line}></li>
        <li className={[this.state.hover === 3 && Style.hover]} data-currindex={3}
        onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className={Style.areaItem}>
              <span>网站导航</span>
              <i style={{fontSize:"12px"}} className="iconfont icon-moreunfold"></i>
          </div>
          <div className={Style.fullDropdown}>
            <ul>
              {
                siteNavData.map((v,i)=>{
                  return (
                    <li key={i}>
                      <p className={Style.title}>{v.name}</p>
                      <DropdownBox list={v.list}></DropdownBox>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </li>
      </ul>
    )
  }
}
export default withRouter(MenuRight)