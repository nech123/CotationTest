import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

.menuNeutro{
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 21px;
  text-decoration: none;
  list-style: none;
  align-items: center;
  justify-content: center;
  color: green;

  a{
   text-decoration: none;
   display: flex;
   color: inherit;
   transition: 0.5s;

   &:hover{
    filter: brightness(0.7);
   }
  }
}
`