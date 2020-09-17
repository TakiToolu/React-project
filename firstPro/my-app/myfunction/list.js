import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { func } from 'prop-types'
//React 列表 & Keys
/*
* 1、每个列表元素分配一个 key，不然会出现警告
* 2、Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。
* 3、元素的 key 在他的兄弟元素之间应该唯一
* */

function Blog(props){
  const sidebar=(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
  const content=props.posts.map((post)=>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
render(
  <Blog posts={posts}/>,
  document.getElementById('root')
);




