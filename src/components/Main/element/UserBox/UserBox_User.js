import React, { PureComponent } from 'react'
import { Popconfirm,Spin,Icon } from 'antd';
import Style from '../../main.less'
import {withRouter} from 'react-router-dom'

class UserBox_User extends PureComponent {
  toLogin=()=>{
    this.props.history.push('/login');
  }
  /**
   * 退出登录
   */
  handleConfirm=()=>{
    this.props.logout();
  }
  /**
   * 前往注册
   */
  toRegister=()=>{
    this.props.history.push('/register');
  }
  render() {
    const loadingIcon = <Icon type="loading" style={{ fontSize: 14 }} spin />;//loading图标
    const data = this.props.user.data;
    return (
      <div className={Style.user}>
        <div className={Style.avatar}>
          <a href="javascript:;">
            {
              !data.code ?
                <img src={require(`../../../../static/user/${data.user.user_avatar}`)} alt="用户名"/> :
                <img src={require('../../../../static/user/no_login.jpg')} alt="未登陆"/>
            }
          </a>
        </div>
        <div className={Style.userName}>
          <p>Hi~欢迎来到天天商城！</p>
          <div>
            {
              !data.code ? 
                (<Spin indicator={loadingIcon} size="small" spinning={this.props.user.loading}>
                  <span className={Style.aLink}>
                    <a href="javascript:;" title="用户名">{data.user.user_nickname}</a>
                    <Popconfirm title="确定要退出吗" placement="bottom"
                      okText="确定"
                      cancelText="取消"
                      onConfirm={this.handleConfirm}>
                      <a href="javascript:;" style={{color:'#F10215'}} title="退出">退出</a>
                    </Popconfirm>
                  </span>
                </Spin>) : 
                (<span className={Style.aLink}>
                  <a onClick={this.toLogin} href="javascript:;" title="登录">登录</a>
                  <a href="javascript:;" onClick={this.toRegister} title="注册">注册</a>
                </span>)
            }
          </div>
        </div>
        <div className={Style.userVip}>
          <a href="javascript" title="新人福利">新人福利</a>
          <a href="javascript" title="专属会员">专属会员</a>
        </div>
      </div>
    )
  }
}

export default withRouter(UserBox_User)