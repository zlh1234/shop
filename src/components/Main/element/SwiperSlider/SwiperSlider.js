import React, { PureComponent } from 'react'
import { Carousel } from 'antd';
import Style from '../../main.less'

export default class SwiperSlider extends PureComponent {
  prevClick=()=>{//下一张
    this.refs.swiper.prev();
  }
  nextClick=()=>{//上一张
    this.refs.swiper.next();
  }
  render() {
    const swiperItem = this.props.swiperItem;
    return (
      <div className={Style.swiperSlider}>
        <Carousel ref="swiper" autoplay effect="fade">
        {
          swiperItem.map(v=>{
            return (
              <div key={v._id} className={Style.swiperItem}>
                <img src={require(`../../../../static/main/${v.src}`)} alt={v.name}/>
              </div>
            )
          })
        }
        </Carousel>
        <div onClick={this.prevClick} className={[Style.aBtn,Style.prevBtn].join(' ')}>
          <i className="iconfont icon-back"></i>
        </div>
        <div onClick={this.nextClick} className={[Style.aBtn,Style.nextBtn].join(' ')}>
          <i className="iconfont icon-more"></i>
        </div>
      </div>
    )
  }
}
