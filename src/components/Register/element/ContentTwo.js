import React, { PureComponent } from 'react'
import {Form,Input,Button,Modal} from 'antd'
import Style from '../register.less'

const FormItem = Form.Item;

class ContentTwo extends PureComponent {
  state = {
    second:10,
    timer:null,
    btnIs:false
  }
  /**
   * 验证码不正确提示框
   */
  modalError=()=>{
    Modal.error({
      title: '错误',
      content: '验证码不正确',
    });
  }
  /**
   * 重新获取邮件
   */
  handleClick = () => {
    this.setState({
      second:10,
      btnIs:false
    });
    this.handleSecond();
  }
  /**
   * 倒计时
   */
  handleSecond = () => {
    let _this = this;
    clearInterval(_this.state.timer);
    _this.state.timer = setInterval(function(){
      if(_this.state.second === 0) {
        _this.setState({
          second:10,
          btnIs:true
        })
        clearInterval(_this.state.timer);
      }else{
        _this.setState({
          second:_this.state.second-1
        })
      }
    },1000)
  }
  /**
   * 下一步
   */
  twoNext=()=>{
    const { getFieldValue } = this.props.form;
    let code = getFieldValue('code');
    if(code===sessionStorage.getItem('identifying')){
      let { username,password,mail,nickname } = this.props.user.reg;
      this.props.register({username,password,mail,nickname});//注册
    }else{
      this.modalError();
    }
  }
  
  componentDidMount(){
    this.props.refFunc(this);
    const mail = this.props.user.reg.mail;
    this.props.sendCode(mail);  //获取验证码
    this.handleSecond();  //开始倒计时
  }
  componentWillUnmount(){
    clearInterval(this.state.timer);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={Style.contentTwo}>
        <div className={Style.wrap}>
          <p>您的邮箱为:<i>{this.props.user.reg.mail}</i></p>
          <p>我们已为您发送过去验证码</p>
          <div className={Style.inputWrap}>
            <Form>
              <FormItem>
                {
                  getFieldDecorator('code',{})(
                    <Input className={Style.input} placeholder="请输入验证码"></Input>
                  )
                }
                <Button onClick={this.handleClick}
                  disabled={!this.state.btnIs}
                  className={Style.btn}>
                  { this.state.btnIs ? "重新获取" : this.state.second }
                </Button>
              </FormItem>
            </Form>
            
          </div>
        </div>
      </div>
    )
  }
}

ContentTwo = Form.create()(ContentTwo);
export default ContentTwo