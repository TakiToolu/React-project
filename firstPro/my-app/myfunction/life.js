import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { func } from 'prop-types'
class Content extends Component{
  constructor (props) {super(props);}
  componentWillMount () {
    console.log(this.props);
    // alert('a、willMount'+ this.props);
  }
  componentDidMount () {
    console.log(this.props);
    // alert('b、DidMount'+ this.props);
  }
  componentWillReceiveProps (nextProps, nextContext) {
    console.log('c、WillReceiveProps');
    console.log(this.props);
    // alert('c、WillReceiveProps');
  }
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('d、shouldComponentUpdate');
    console.log(this.props);
    // alert('d、 shouldUpdate');
    return true;
  }
  UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('e、componentWillUpdate');
    console.log(this.props);
    // alert('e、WillUpdate');
  }
  render () {
    return <div>{this.props.name}</div>
  }
}
class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Hello Runoob!'};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentWillMount () {
    console.log(this.state.value);
    // alert('1、willMount'+this.state.value);
  }
  componentDidMount () {
    console.log(this.state.value);
    // alert('2、DidMount'+this.state.value);
  }
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('3 \ shouldComponentUpdate');
    console.log(this.state.value);
    // alert('3 \shouldUpdate');
    return true;
  }
  UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('4  componentWillUpdate');
    console.log(this.state.value);
    // alert('4 WillUpdate');
  }
  componentWillReceiveProps (nextProps, nextContext) {
    alert('\WillReceiveProps')
  }
  handleChange(event) {
    console.log(this)
    this.setState({value: event.target.value});
  }
  handleClick(){
    this.setState({value:'1234567'})
  }
  render() {
    var value = this.state.value;
    return <div>
      <input type="text" value={value} onChange={this.handleChange} />
      <h4>{value}</h4>
      <Content name={this.state.value}/>
      <button onClick={this.handleClick}>gai</button>
    </div>;
  }
}
render(
  <HelloMessage />,
  document.getElementById('root')
);


