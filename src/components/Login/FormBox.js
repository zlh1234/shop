import React, { PureComponent } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter} from 'react-router-dom'
import Style from './login.less'

@withRouter
class FormBox extends PureComponent {

  componentDidMount(){
    this.props.form.setFieldsValue({username:'zlh123',password:'hs123456'});
  }

  /**
   * 登录
   * @param {Object} e 
   */
  handleSubmit=e=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  }
  /**
   * 前往注册
   */
  toRegister=()=>{
    this.props.history.push('/register');
  }
  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={Style.inputBox}>
        <Form onSubmit={this.handleSubmit} className={[Style.loginForm,'clearfix'].join(' ')}>
          <FormItem className={Style.input}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名不能为空且不能为空格!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem className={Style.input}>
            {getFieldDecorator('password', {
              rules: [{ required: true, min:6, message: '密码必不能为空且大于6位!'}],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem className="clearfix">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a href="" className={Style.forgotPass}>忘记密码</a>
            <Button loading={this.props.user.loading} className={Style.loginBtn} type="primary" htmlType="submit">
              登录
            </Button>
            <span className={Style.forgotPass}>
              Or <a onClick={this.toRegister} href="javascript:;">去注册</a>
            </span>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default FormBox = Form.create()(FormBox);