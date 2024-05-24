import styled from "styled-components";
import { NavLink } from "react-router-dom";


interface ContainerProps {
  openDropDownMenu: boolean;
}

interface ClearButtonProps {
  clearButton: boolean;
}

interface Responsive {
  openSearch: boolean
}

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // as duas linhas abaixos são para manter o header fixo no topo dá página.
  position: sticky;
  top: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

//o elemento margin dentro da DIV ButtonContainer está dinâmico que é definido no corpo do elemento e trazido para dentro da estilização por meio de uma variável.
export const ButtonContainer = styled.div<{ margin?: string}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => margin? margin : 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  //parte de trás dos elementos que fica cinza conforme fazemos um hover.
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const YoutubeLogo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline:none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width:200px;
  display: flex;
`;

export const ClearButton = styled.button<ClearButtonProps>`
  display: ${({clearButton}) => clearButton? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .4s;
  background-color: ${({theme}) => theme.colors.secondary};

  &:hover{
    background-color: ${({theme}) => theme.colors.borderColor};
  }
`;
export const CloseImg = styled.img`
  width: 15px;
`;