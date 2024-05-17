
import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({openMenu}) => openMenu? '80%' : 'inherit'};
  
  
  max-width: inherit;
  height: 56px;
  position: fixed;
  top: 55px;
  
  display: flex;
  align-items: center;
  
  
  
  
  @media(max-width: 1500px) {
    width: ${({openMenu}) => openMenu? '75%' : '80%'};
    
  }


  @media(max-width: 1024px) {
    width: ${({openMenu}) => openMenu? '73%' : '92%'};
    
  }

  @media(max-width: 834px) {
    width: 100%;
  }

  @media(max-width: 688px) {
    width: 80%;
  }

  @media(max-width: 414px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.category};
  background-color: ${({theme}) => theme.colors.bgColor};

  &:hover{
    background-color: ${({theme}) => theme.colors.borderColor};
    font-weight: 550;
  }

  &:focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 70%;
  overflow-x: hidden;
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
  
`;


export const SliderButtonsContent = styled.div`
width: 65px;
min-width: 65px;
height: 56px;
display: flex;
justify-content: center;
align-items: center;

`;

export const SliderButtons = styled.div`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
    
  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  border-radius: 50%;
  
  
`;
