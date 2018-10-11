import React, { PureComponent } from 'react'

import Style from './search.less'
import { message } from 'antd';
export default class SearchBox extends PureComponent {

  handleClick=()=>{
    this.refs.file.click();
  }
  fileChange=()=>{
    // console.log(e);
    message.success('success!');
  }
  render() {
    return (
      <div style={this.props.option} className={[Style.searchBox,'clearfix'].join(' ')}>
        <input type="text" placeholder="请输入内容" />
        <form action="">
          <a href="javascript:;" onClick={this.handleClick}>
            <i className="iconfont icon-camera"></i>
          </a>
          <input ref="file" type="file" onChange={this.fileChange} />
        </form>
        <button className={Style.searchBtn}><i className="iconfont icon-sousuo"></i></button>
      </div>
    )
  }
}
