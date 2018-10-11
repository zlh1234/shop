import React, { PureComponent } from 'react'
import Style from './main.less'
import { mainMenu,swiperItem,banner,news,service } from '../Common/StaticData'
import MainMenu from './element/MainMenu/MainMenu'
import SwiperSlider from './element/SwiperSlider/SwiperSlider'
import Banner from './element/Banner/Banner'
import UserBox from './element/UserBox/UserBox'
export default class Main extends PureComponent {
  render() {
    return (
      <div className={Style.main}>
        <div className={Style.mainBox}>
          <MainMenu mainMenu={mainMenu}></MainMenu>
          <SwiperSlider swiperItem={swiperItem}></SwiperSlider>
          <Banner banner={banner}></Banner>
          <UserBox logout={this.props.logout} user={this.props.user} news={news} service={service}></UserBox>
        </div>
      </div>
    )
  }
}
