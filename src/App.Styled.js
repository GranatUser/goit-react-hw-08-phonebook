import styled from "styled-components";

export const AppStyled = styled.div`

 & li>button{
    border: none;
    width: 100px;
    height: 30px;
 }
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
 & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px 10px 20px;
    height: auto;
    width: 300px;
    margin-top:20px;
    border: 1px solid black;
 }
& form>button{
    width: 200px;
    height: 30px;
    border: none;
    margin-top: 20px;
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