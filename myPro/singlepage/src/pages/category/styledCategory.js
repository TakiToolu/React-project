import styled from "styled-components"

export const HeaderWrap=styled.div`
  height:.44rem;
  background:#ee742f;
  display:flex;
  align-items:center;
  justify-content:center;
  ul{
    width:1.4rem;
    height:.3rem;
    display:flex;
    position:relative;
    border:1px solid #fff;
    z-index:0;
    border-radius:.05rem;
    overflow:hidden;
  }
  li{
    flex:1;
    line-height:.3rem;
    width:50%;
    text-align:center;
    color:#fff;
    &:last-child{
      position:absolute;
      width:50%;
      height:.3rem;
      position:absolute;
      background:#fff;
      z-index:-1;
      border-radius:.05rem;
      transform:translate(0,0);
      transition:all 0.2s ease-in;
      &.right{
        
        transform:translate(100%,0);
      }
    }
    &.active{
      // background:#fff;
      color:#cc742f;
    }
  }
`

export const CateWrapw=styled.div`
  height:100%;
  overflow:hidden;

`