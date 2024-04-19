import styled from "styled-components";


export const Container = styled.div<{ openMenu: boolean}>`
  
  width: ${({ openMenu }) => openMenu? "268px" : "100px"};
  height: calc(100vh - 55px); //calcula a altura da página menos a altura do header que é de 55px.
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  //caso os itens ultrapassem o limite do elemento, cria-se um scroll automáticamente.
  overflow-y: auto;
  
`;

export const MenuItem = styled.div<{ openMenu: boolean}>`
  width: 98%;
  min-height: ${({ openMenu }) => openMenu? "45px;" : "70px"};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ openMenu }) => openMenu? "row" : "column"};
  align-items: center;
  justify-content: ${({ openMenu }) => openMenu? "none" : "center"};
  
  span {
    font-weight: ${({ openMenu }) => openMenu? "600" : "400"};
    margin-left: ${({ openMenu }) => openMenu? "20px" : "none"};
    font-size: ${({ openMenu }) => openMenu? "15px" : "12px"};
    text-align: ${({ openMenu }) => openMenu? "none" : "center"};
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  

`;