import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
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

//把一个React元素渲染到DOM容器内部
let ele=<h1>aoaoao</h1>;
let _ele2=React.createElement('div', { className:'red',key:1},
  [React.createElement('span',null,['hello']), ]);
let  names=['大胖','二胖','三胖'];
let style={backgroundColor:'pink'};

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <h1>hello</h1>,
  // _ele2,
  <div>
    {
      names.map(function (item,index) {
          //index.js:1 Warning: Each child in a list should have a unique "key" prop.
          return item.length>0?<span style={style} className="red" key={index}>{item}</span>:null;
      })
    }
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


