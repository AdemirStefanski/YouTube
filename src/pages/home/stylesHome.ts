import styled from "styled-components";

export const MainContainer = styled.div<{ openMenu: boolean}>`
 width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 290px' : '140px 10px 0 100px'};
  box-sizing: border-box;
`;

export const Container  = styled.div<{ openMenu: boolean}>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({ openMenu }) => openMenu? "repeat(4, 1fr);" : "repeat(5, 1fr);"}; 
  column-gap: 20px;
  row-gap: 50px;

`;
