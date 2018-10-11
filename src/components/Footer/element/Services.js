import React,{PureComponent} from 'react'

import Style from '../footer.less'

export default class Services extends PureComponent{
    render(){
        return (
            <div className={Style.services}>
                <ul className="clearfix">
                    <li>
                        <div className={Style.liWrap}>
                            <div style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} className={[Style.img,Style.imgText1].join(' ')}></div>
                            <p>品类齐全，轻松购物</p>
                        </div>
                    </li>

                    <li>
                        <div className={Style.liWrap}>
                        <div style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} className={[Style.img,Style.imgText1].join(' ')}></div>
                            <p>多仓直发，极速配送</p>
                        </div>
                    </li>

                    <li>
                        <div className={Style.liWrap}>
                        <div style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} className={[Style.img,Style.imgText1].join(' ')}></div>
                            <p>正品行货，精致服务</p>
                        </div>
                    </li>

                    <li>
                        <div className={Style.liWrap}>
                        <div style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} className={[Style.img,Style.imgText1].join(' ')}></div>
                            <p>天天低价，畅选无忧</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}