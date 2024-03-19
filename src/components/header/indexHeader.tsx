import { Container, LogoContainer, ButtonContainer, ButtonIcon, YoutubeLogo, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton } from "./stylesHeader";
import HamburguerIcon from "../../assets/hamburger.png";
import YoutubeLogoCat from "../../assets/YouTubeCat.gif";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import NotificationIcon from "../../assets/sino.png";
import VideoIcon from "../../assets/video.png";

//criado para trabalhar com a função de abrir e fechar o Menu.
interface IProps {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void
}

function Header({ openMenu, setOpenMenu}: IProps) {
  return (
    <Container>
      <LogoContainer>
        <ButtonContainer onClick={() => setOpenMenu(!openMenu)}  margin="0 10px 0 0">
          <ButtonIcon alt="" src={HamburguerIcon} />
        </ButtonContainer>
        <YoutubeLogo alt="" src={YoutubeLogoCat} />
      </LogoContainer>

      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar" />
        </SearchInputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        {/* margin esta com uma string que define margin nesse contexto do ButtonContainer. */}
        <ButtonContainer margin="0 0 0 10px">  
          <ButtonIcon alt="" src={MicIcon} />
        </ButtonContainer>
      </SearchContainer>

      <HeaderButton>
        <ButtonContainer margin="0 0 0 10px">
          {/* margin esta com uma string que define margin nesse contexto do ButtonContainer. */}
          <ButtonIcon alt="" src={VideoIcon} />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          {/* margin esta com uma string que define margin nesse contexto do ButtonContainer. */}
          <ButtonIcon alt="" src={NotificationIcon} />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          AS
        </ButtonContainer>

      </HeaderButton>

    </Container>
  );
}

export default Header;
