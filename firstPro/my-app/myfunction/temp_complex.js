import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import * as serviceWorker from './serviceWorker';

//受控组件(元素)，不依赖状态值
class Panel extends Component{
  constructor () {
    super();
    this.state={color:'black'};
  }
  render () {
    return (
      <div className="panel panel-default">
        <button onClick={()=>{this.setState({color:'blue'})}}>蓝</button>
        <button onClick={()=>{this.setState({color:'red'})}}>红</button>
        <PanelHead color={this.state.color} head={this.props.head}/>
        <PanelBody body={this.state.body}/>
        <PanelFooter footer={this.state.footer}/>
      </div>
    )
  }
}
class PanelHead extends Component{

  render () {
    return <div className="panel panel-heading " style={{color:this.props.color}}>头部哦+{this.props.head}</div>
  }
}
class PanelBody extends Component{

  render () {
    return <div className="panel panel-body">body+{this.props.body}</div>
  }
}
class PanelFooter extends Component{

  render () {
    return <div className="panel panel-footer">footer+ {this.props.footer}</div>
  }
}



render(
  <Panel head="头" body="体" footer="尾"/>,
  document.getElementById('root')
);

// serviceWorker.unregister();


