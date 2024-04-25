import {
  Container,
  LogoContainer,
  ButtonContainer,
  ButtonIcon,
  YoutubeLogo,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButton,
} from "./stylesHeader";
import HamburguerIcon from "../../assets/hamburger.png";
import YoutubeLogoCat from "../../assets/YouTubeCat.gif";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import NotificationIcon from "../../assets/sino.png";
import VideoIcon from "../../assets/video.png";
import { useContext } from "react";
import { MenuContext } from "../../contexts/openMenuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Header() {
  const { login, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          onClick={() => setOpenMenu(!openMenu)}
          margin="0 10px 0 0"
        >
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

        {login ?
          <> 
            <ButtonContainer margin="0 0 0 10px">
              AS
            </ButtonContainer>
            
            <span onClick={() => logOut()}>Sair</span>
          </>
        :
          <button onClick={() => navigate("/login")}>Fazer Login</button>
        }
      </HeaderButton>
    </Container>
  );
}

export default Header;
