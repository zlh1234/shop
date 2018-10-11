import React, { PureComponent } from 'react'

import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Main from '../../components/Main/Main'
import Affix from '../../components/Affix/Affix'
import Goods from '../../components/Goods/Goods'
import Footer from '../../components/Footer/Footer'

import {connect} from 'react-redux'
import {logout} from '../../redux/userReducer'
@connect(state=>({
  user:state.userRedux
}),{logout})

class Index extends PureComponent {
  componentDidMount(){
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div ref={node=>this.node = node} style={{position: "relative",width: "100%",background: "#F0F3EF"}}>
        <Affix></Affix>
        <Header user={this.props.user}></Header>
        <Search></Search>
        <Main user={this.props.user} logout={this.props.logout}></Main>
        <Goods></Goods>
        <Footer></Footer>
      </div>
    )
  }
}

export default Index