import React,{Component} from 'react';
import './login.less';
import logo from '../../assets/images/logo.png'
import { Form, Input, Button,Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin} from '../../api'
import {message} from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import {Redirect} from 'react-router-dom'
// const Item=Form.Item;


export default class Login extends Component{
  handleSubmit=async (values)=> {
    const {username, password} = values;
    // console.log('submit触发 ', values);
    try {
      const response = await reqLogin(username, password);
      let {status, msg} = response;
      if (status === 1) {
        // console.log('登录失败', msg);
      } else if (status === 0) {
        message.success('登录成功');
        // console.log('登录成功');
        //保存user
        const user=response.data;
        // console.log(user);
        memoryUtils.user=user;
        storageUtils.saveUser(user);
        this.props.history.replace('/');//不需要回退主页
        // console.log( this.props.history);
        // console.log( this.props.location);
      }
    } catch(error){
      console.log('获取状态失败',error.message);
    }
  }
  //form 对象

  render(){
    //如果用户已经登录，自动跳转到管理界面
    const user=memoryUtils.user;
    if(user&&user._id){
      return <Redirect to='/'/>
    }
    // const form=this.props.form;
    const onFinish = (values) => {
      console.log('Received values of form: ', values)
      this.handleSubmit(values)
    }
    return (
        <div className="login">
          <header className="login-header">
            <img src={logo} alt=""/>
            <h1>React项目：后台管理系统</h1>
          </header>
          <section className="login-content">
            <h2>用户登录</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
            >
              {/*声明式验证  ：直接使用别人定义好的验证规则进行验证*/}
              <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,whitespace:true,
                      message: 'Please input your Username!',
                    },
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },

                  ]// 初始值
                    }
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                  name="password"
                  rules={[
                    { required: true,message: 'Please input your Password!',},
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                  ]}
              >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                {/*Or <a href="">register now!</a>*/}
              </Form.Item>
            </Form>
          </section>
        </div>
    )
  }
}

/*
// const WrapLogin = Form.useForm({})(Login);
// export default WrapLogin;
// export default Login;
/*
1. 前台表单验证
2. 收集表单输入数据
*/
