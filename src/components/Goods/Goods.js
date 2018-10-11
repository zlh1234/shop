import React, { PureComponent } from 'react'
import Style from './goods.less'

import GoodList from './element/GoodList'

export default class Goods extends PureComponent {
    
    render(){
        return (
            <div className={Style.goods}>
                <div className={Style.goodsBox}>
                    <div className={Style.titleWrap}>
                        <h1 className={Style.title}>为你推荐</h1>
                    </div>
                    <GoodList></GoodList>
                </div>
            </div>
        )
    }
}