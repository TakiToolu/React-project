/*
* 能发送异步ajax 请求的而寒暑模块
* 封装axios库
* 函数返回值是promise对象
* */

import axios from 'axios';
import {message} from 'antd';

export default function ajax(url,data={},type='GET'){
  return new Promise((resolve,reject)=>{
    let promise;
    if(type==='GET'){
      promise=axios.get(url,{//配置对象
        params:data //指定参数
      })
    }else{
      promise= axios.post(url,data);
    }
    promise.then(response=>{
      resolve(response.data)
    },err=>{
      message.error('请求出错了',err.message)

    })

  })

}

// 请求登陆接口
// ajax('/login', {username: 'Tom', passsword: '12345'}, 'POST').then()
// 添加用户
// ajax('/manage/user/add', {username: 'Tom', passsword: '12345', phone: '13712341234'}, 'POST').then()
