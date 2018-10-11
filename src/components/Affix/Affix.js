import React, { PureComponent } from 'react'

import Style from './affix.less'
import SearchBox from '../Common/SearchBox/SearchBox'

export default class Affix extends PureComponent {
  state = {
    isShow:false,//是否显示
    option:{
      backgroundColor:"#EFEFEF",
      top:"7px"
    }
  }
  handleScroll=()=>{//滚动函数
    let currentTop = document.documentElement.scrollTop || document.body.scrollTop;
    let bool = currentTop >= 700 ? true : false;
    this.setState({isShow:bool});
  }
  componentDidMount(){
    let _this = this;
    window.addEventListener('scroll',_this.handleScroll);
  }
  componentWillUnmount(){
    let _this = this;
    window.removeEventListener('scroll',_this.handleScroll);
  }
  render() {
    return (
      <div className={[Style.affix,this.state.isShow && Style.ff].join(' ')}>
        <div className={Style.affixBox}>
          <div className={Style.logo} style={{backgroundImage:'url('+require('../../static/logo.png')+')'}}></div>
          <SearchBox option={this.state.option}></SearchBox>
        </div>
      </div>
    )
  }
}
