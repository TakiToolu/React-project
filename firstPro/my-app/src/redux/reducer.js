var obj=[
  {name:"xixi",age:12}
]
export function data(state=obj[0].age,action){
    switch(action.type){
      case "ADD":
        return state+action.data;
      case "SUB":
        return state-action.data;
      default:
        return state;
        break;
    }
}