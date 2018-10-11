import React, { PureComponent } from 'react'
import Style from '../register.less'
import {Form,Input,Icon} from 'antd'
const FormItem = Form.Item;
class ContentOne extends PureComponent {
  /**
   * 检测两次密码是否一致
   */
  handleConfirmPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('password')) {
        callback('两次输入不一致！')
    }
    callback()
  }
  
  /**
   * 第一次点击下一步时
   */
  oneNext=()=>{
    console.log(this);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.checkUser(values);
      }
    });
  }

  componentDidMount(){
    this.props.refFunc(this);
  }
  render() {
    let { username,nickname,mail,checkUsername } = this.props.user.reg;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={[Style.contentOne,Style.content].join(' ')}>
        <div className={Style.wrap}>
          <Form>
            <FormItem className={!checkUsername ? Style.checkTip : ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, min: 6, message: '用户名长度6位以上!' }],
                initialValue: username
              })(
                <Input
                  placeholder="用户名"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
              {!checkUsername && <p className={Style.checkShow}>该用户名已被注册!</p>}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                  rules: [{ required: true, min: 6, message: '密码长度6位以上!' }],
                })(
                <Input
                  type="password"
                  placeholder="密码"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('passwordTwo', {
                  rules: [{ 
                    required: true, 
                    message: '请再次输入密码!' 
                  },{
                    validator: this.handleConfirmPassword
                  }],
                })(
                <Input
                  type="password"
                  placeholder="确认密码"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: '昵称不能为空!' }],
                initialValue: nickname
                })(
                <Input
                  placeholder="昵称"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('mail', {
                  rules: [{ required: true, pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, message: '请输入正确的邮箱!' }],
                initialValue: mail
                })(
                <Input
                  placeholder="邮箱地址"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
ContentOne = Form.create()(ContentOne);
export default ContentOne