import React,{PureComponent} from 'react'
import Style from '../goods.less';
import LazyLoad from 'react-lazyload';
import {connect} from 'react-redux'
import {getList} from '../../../redux/listReducer'

@connect(state=>({
    list:state.listRedux
}),{
    getList
})

export default class GoodList extends PureComponent {
   
    /**
     * 加载更多
     */
    loadMore=()=>{
        // let oUl = this.refs.oUl;
        // let n = oUl.offsetHeight;
        if(!this.props.list.isLoading){
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;//文档总高度
            let currentTop = document.documentElement.scrollTop || document.body.scrollTop;//当前滚动条距离顶部距离
            let currentHeight = document.documentElement.clientHeight || document.body.clientHeight;//当前屏幕的可视高度
            console.log(currentHeight,currentTop,scrollHeight);
            if(currentTop + currentHeight >= scrollHeight-20-216) this.props.getList();//216是footer的高度
        }
    }
    componentDidMount(){
        let _this = this;
        window.addEventListener('scroll',_this.loadMore);
    }
    componentWillUnmount(){
    let _this = this;
    window.removeEventListener('scroll',_this.loadMore);
    }

    handleClick=()=>{
        this.props.getList();
    }

    render(){
        console.log(this.props.list.isLoading);
        const list = this.props.list.list || [];
        return (
            <div className={Style.list}>
                <ul ref="oUl" className="clearfix">
                    {
                        list.map(v => {
                            return (
                                <li key={v._id}>
                                    <a className={Style.liWrap} href="javascript:;" title={v.name}>
                                        <div className={Style.img}>
                                            <LazyLoad height={170}>
                                                <img src={require('../../../static/goods/goods.jpg')} alt={v.name}/>
                                            </LazyLoad>
                                            
                                        </div>
                                        <div className={Style.info}>
                                            <p className={Style.goodsName}>
                                                {v.name}
                                            </p>
                                            <p className={Style.price}>
                                                <i>￥</i>65
                                            </p>
                                        </div>
                                        <div className={Style.find}>
                                            <span>找相似</span>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}