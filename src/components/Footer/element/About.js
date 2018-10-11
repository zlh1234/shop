import React,{PureComponent} from 'react'

import Style from '../footer.less'

export default class About extends PureComponent {
    render(){
        return (
            <div className={Style.about}>
                <div className={Style.link}>
                    <a href="javascript:;">关于我们</a>
                    <span>|</span>
                    <a href="javascript:;">联系我们</a>
                    <span>|</span>
                    <a href="javascript:;">联系客服</a>
                    <span>|</span>
                    <a href="javascript:;">合作招商</a>
                    <span>|</span>
                    <a href="javascript:;">商家帮助</a>
                    <span>|</span>
                    <a href="javascript:;">营销中心</a>
                    <span>|</span>
                    <a href="javascript:;">手机京东</a>
                    <span>|</span>
                    <a href="javascript:;">友情链接</a>
                    <span>|</span>
                    <a href="javascript:;">销售联盟</a>
                    <span>|</span>
                    <a href="javascript:;">京东社区</a>
                    <span>|</span>
                    <a href="javascript:;">风险监测</a>
                    <span>|</span>
                    <a href="javascript:;">隐私政策</a>
                    <span>|</span>
                    <a href="javascript:;">京东公益</a>
                    <span>|</span>
                    <a href="javascript:;">English Site</a>
                    <span>|</span>
                    <a href="javascript:;">Media & IR</a>
                </div>

                <div className={Style.copyright}>
                    <a className={[Style.img,Style.imgText1].join(' ')} style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} href="javascript:;">可信网站信用评估</a>
                    <a className={[Style.img,Style.imgText2].join(' ')} style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} href="javascript:;">网络警察提醒你</a>
                    <a className={[Style.img,Style.imgText3].join(' ')} style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} href="javascript:;">诚信网站</a>
                    <a className={[Style.img,Style.imgText4].join(' ')} style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} href="javascript:;">中国互联网举报中心</a>
                    <a className={[Style.img,Style.imgText5].join(' ')} style={{backgroundImage:'url(' + require('../../../static/footer.png') + ')'}} href="javascript:;">网络举报APP下载</a>
                </div>
            </div>
        )
    }
}