import { put } from "redux-saga/effects";
import * as types from "./action-types";
import {get} from "../../utils/http"
function* loadData(action){
  const result=yield get({
    url:action.url
  })
  yield put({type:types.LOADDATA,data:result.data})
}
export {
  types,
  loadData as action,
}