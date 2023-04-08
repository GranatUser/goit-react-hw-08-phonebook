import styled from "styled-components";

export const AppStyled = styled.div`


 & li>button:hover, & li>button:focus,& form>button:focus,& form>button:hover{
   background-color:#eb4034;
   cursor: pointer;
 }
 & li {
    display: flex;
    column-gap: 20px;

 }
  & li {
    margin-top: 20px;
 }
 
 & li p {
    display: block;
    padding: 5px;
 }
& main {
   margin-left:0;
   margin-right:0;
 }

& .contacts-finder {
    margin-top: 20px;
}
& .contacts-finder input {
    margin-top: 20px;
}
& h2{
    margin-top: 20px;
}
  `