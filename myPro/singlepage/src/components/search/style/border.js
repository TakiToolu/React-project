import styled from "styled-components"


//border是高阶组件，参数和返回值都组件，将参数组件添加border属性后再返回
const border=({Comp})=>{
  const BorderComp=styled(Comp)`
      border-width:${props=>props.width||"1px"};
      border-color:${props=>props.color||"#ccc"};
      border-style:${props=>props.style||"solid"};
      border-radius:${props=>props.radius||0};
  `
  return BorderComp;
}

export default border;