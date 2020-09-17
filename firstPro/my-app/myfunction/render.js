//渲染函数，自己完成 ReactDOM.render 的方法
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//标签类型、属性对象、子元素
let ele2=React.createElement('div',null,['children'])
//ele2 经过转译变成下面的对象 eleObj（createElement的返回值）
let eleObj={type:'div',props:{
    className:'red',
    id:1,
    children:['hello']
  }}
//自己写的render函数
function render(eleObj,container){
  //结构赋值
  let {type,props}=eleObj;
  let ele=document.createElement(type);
  for (let attr in props){
    if(attr==='children'){
      props[attr].forEach(function(item,index){
        if(typeof item =='string'){
          let textNode=document.createTextNode(item);
          // textNode.setAttribute('key',index);
          ele.appendChild(textNode);
        }else{
          render(item,ele);
        }
      })
    }else if(attr==='className'){
      ele.setAttribute('class',props[attr]);
    } else{
      ele.setAttribute(attr,props[attr]);
    }
  }
  console.log(ele)
  container.appendChild(ele);
}

render(_ele2,document.getElementById('root'))