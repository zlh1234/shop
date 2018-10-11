import React, { PureComponent } from 'react'
import Style from '../search.less'


export default class Hot extends PureComponent {
  state = {
    index:0,//当前显示的下标
    timer:null
  }
  /**
   * 更改index的值
   */
  indexChange(){
    let _this = this;
    let maxIndex = _this.props.hotSearch.hotRecommend.length-1;
    clearInterval(_this.state.timer);
    _this.state.timer = setInterval(function(){
      let step = 1;//步长
      if(_this.state.index >= maxIndex) step = maxIndex*(-1);
      _this.setState({index:_this.state.index+step});
    },2500);
  }
  componentDidMount(){
    this.indexChange();
  }
  componentWillUnmount(){
    clearInterval(this.state.timer);
    this.setState({timer:null,index:0});
  }
  render() {
    const { hotRecommend,hotWord } = this.props.hotSearch;
    return (
      <div className={[Style.hot,'clearfix'].join(' ')}>
        <ul className="clearfix">
          <li><a href="javascript:;">{hotRecommend[this.state.index]}</a></li>
          {
            hotWord.map((v,i)=>{
              return (
                <li key={i}><a href="javascript:;">{v}</a></li>
              )
            })
          }
          <li></li>
        </ul>
      </div>
    )
  }
}
