import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'
import Style from './register.less'
import { Steps, Button } from 'antd';

import ContentOne from './element/ContentOne'
import ContentTwo from './element/ContentTwo'
import ContentThree from './element/ContentThree'

const Step = Steps.Step;
const steps = [{
  title: '个人信息',
  content: ContentOne,
}, {
  title: '邮箱验证',
  content: ContentTwo,
}, {
  title: '确认',
  content: ContentThree,
}];


@withRouter
export default class Register extends PureComponent {
  //前去登录
  toLogin=()=>{
    this.props.registerDone();
    this.props.history.goBack();
  }
  prev=()=>{
    this.props.prev();
  }
  next = () => {
    if(this.props.user.reg.current===0){
      this.child.oneNext();
    }else if(this.props.user.reg.current===1){
      this.child.twoNext();
    }
  }
  success=()=>{
    this.props.registerDone();
    this.props.history.push('/login');
  }
  refFunc=ref=>{
    this.child = ref;
  };
  render() {
    const { current } = this.props.user.reg;
    const Content = steps[current].content;
    return (
      <div className={Style.register}>
        <div className={Style.title}>
          <span>
            <a className={Style.backLogin} onClick={this.toLogin} href="javascript:;">返回</a>
            注 册
          </span>
        </div>
        <div className={[Style.registerBox,'clearfix'].join(' ')}>
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div className={Style.stepsContent}>
            <Content {...this.props} refFunc={this.refFunc}></Content>
          </div>
          <div className={Style.stepsAction}>
            {
              (current > 0 && current < steps.length - 1) && (<Button style={{ marginRight: 8 }} onClick={this.prev}>上一步</Button>)
            }
            {
              current < steps.length - 1 && <Button loading={this.props.user.loading} type="primary" onClick={this.next}>下一步</Button>
            }
            {
              current === steps.length - 1 && <Button type="primary" onClick={this.success}>完成</Button>
            }
          </div>
        </div>
      </div>
    )
  }
}

