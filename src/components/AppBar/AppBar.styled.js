import styled from "styled-components";
export const AppBarStyled = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
  & a {
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
}
& a:hover{
  background-color: rgba(65,105,225,0.1);

}
& a.active {
  color: #e84a5f;
}
`