//唯一
import  {createStore} from 'redux'
import {data} from './reducer'

console.log(data)
export var store=createStore(data)