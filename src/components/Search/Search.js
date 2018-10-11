import React, { PureComponent } from 'react';
import Style from './search.less';

import Logo from './element/Logo';
import SearchWrap from './element/SearchWrap';
import ShopCart from './element/ShopCart';
import Hot from './element/Hot';
import NavItem from './element/NavItem';

import {hotSearch,navItem} from '../Common/StaticData'

class Search extends PureComponent {
  render() {
    return (
      <div className={[Style.search]}>
        <div className={Style.searchWrap}>
          <div className={Style.mLeft}>
            <Logo></Logo>
          </div>
          <div className={Style.mRight}>
            <SearchWrap></SearchWrap>
            <ShopCart></ShopCart>
            <Hot hotSearch={hotSearch}></Hot>
            <NavItem navItem={navItem}></NavItem>
          </div>
        </div>
      </div>
    )
  }
}
export default Search