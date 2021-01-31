import store from 'store';

const USER_KEY='userkey'
//提供local数据的存储操作
export default {

  //保存user
  saveUser(user){
    // localStorage.setItem('user_key',JSON.stringfy(user))
    store.set(USER_KEY,user);
  },

  //读取user
  getUser(){
    // return JSON.parse(localStorage.getItem(USER_KEY)||'{}');
    return store.get(USER_KEY)||{};
  },
  //删除user
  removeUser(){
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY);
  }
}