
import React,{PureComponent} from 'react'

import Style from './footer.less'

import Services from './element/Services'
import About from './element/About'

export default class Footer extends PureComponent{
    render(){
        return(
            <div className={Style.footer}>
                <div className={Style.footerBox}>
                    <Services></Services>
                    <About></About>
                </div>
            </div>
        )
    }
}