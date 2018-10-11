import React, { PureComponent } from 'react'

import Style from '../search.less'
import SearchBox from '../../Common/SearchBox/SearchBox'

export default class SearchWrap extends PureComponent {
  render() {
    return (
      <div className={Style.searchWrap}>
        <SearchBox option={{backgroundColor:"white",bottom:0}}></SearchBox>
      </div>
    )
  }
}
