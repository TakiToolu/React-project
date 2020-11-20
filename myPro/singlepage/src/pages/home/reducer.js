import { LOADDATA,SETSHOW } from './action-types'

const defaultState={
  list:[]
}
export default (state=defaultState,action)=>{
  switch(action.type){
    case LOADDATA:
      return{
        list:action.data
      }
      break;
    default:
      return state;
      break;
  }
}