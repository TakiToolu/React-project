import styled from "styled-components"

export const HeaderWrap=styled.div`
    height:.44rem;
    background:#ee742f;
    font-size:.18rem;
    color:#fff;
    text-align:center;
    line-height:.44rem;
  `
export const SwiperWrap=styled.div`
  height:0;
  font-size:0;
  padding-bottom:66.66667%;
  img{
    width:100%
  }
`

export const HotCateWrap=styled.div`
  header{
    line-height:.5rem;
    background:#fff;
    padding-left:.2rem;
    border-bottom:1px solid grey;
  }
  .item{
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
      width:70%;
    }
    span{
        margin:.05px;
      }
  }
`