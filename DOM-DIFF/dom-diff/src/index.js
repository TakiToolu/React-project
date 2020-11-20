import {createElement,render,renderDom} from './element'
let vertualDom=createElement('ul',{class:'list'},[
  createElement('li',{class:'item'},['a']),
  createElement('li',{class:'item'},['b']),
  createElement('li',{class:'item'},['c']),
])
//将虚拟dom转化成了真实DOM渲染到页面上
let el=render(vertualDom);
renderDom(el,window.root);
console.log(vertualDom);