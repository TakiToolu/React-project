import { LOADDATA,SETSHOW } from './action-types'

const defaultState={
  list:[],
  isShow:true
}
export default (state=defaultState,action)=>{
  switch(action.type){
    case LOADDATA:
      return{
        list:action.data
      }
      break;
    case SETSHOW:
      return{
        ...state,
        isShow:action.data
      }
    default:
      return state;
      break;
  }
}