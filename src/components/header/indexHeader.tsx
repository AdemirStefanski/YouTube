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
  ClearButton,
  CloseImg,
  BackButton,
  SearchButtonResponsive,
  LinkLogo
} from "./stylesHeader";
import HamburguerIcon from "../../assets/hamburger.png";
import YoutubeLogoCat from "../../assets/YouTubeCat.gif";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import NotificationIcon from "../../assets/sino.png";
import VideoIcon from "../../assets/video.png";
import CloseIcon from "../../assets/close.png";
import BackButtonIcon from "../../assets/back_button.png"
import { useContext, useRef, useState } from "react";
import { MenuContext } from "../../contexts/openMenuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useCategoryContext } from "../../contexts/searchCategories";
import { useSearchContext } from "../../contexts/searchContext";

function Header() {
  const navigate = useNavigate();

  const { openMenu, setOpenMenu } = useContext(MenuContext);

  const [clearButton, setClearButton] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const Search = () => {
    setOpenSearch(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu } =
    useContext(UserContext);

  const handleDropDownMenu = () => {
    setOpenDropDownMenu(!openDropDownMenu);
  };

  const { setSearch } = useSearchContext();

  const [inputValue, setInputValue] = useState("");

  console.log(inputValue)

  function handleInput(inputValue: string) {
    setInputValue(inputValue);
    if (inputValue === "") {
      setClearButton(false)
    } else ( 
      setClearButton(true)
    )
  }

  const clearInput = () => {
    setInputValue("");
    setClearButton(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const goOut = () => {
    logOut();
    handleDropDownMenu();
    navigate("/");
  };

  const goYourVideos = () => {
    navigate("/yourvideos");
    handleDropDownMenu();
  };

  const { setCategoryId } = useCategoryContext();

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          onClick={() => setOpenMenu(!openMenu)}
          margin="0 10px 0 0"
        >
          <ButtonIcon alt="" src={HamburguerIcon} />
        </ButtonContainer>
        <LinkLogo to='/' onClick={() => setCategoryId('0')}>
          <YoutubeLogo alt="" src={YoutubeLogoCat} />
        </LinkLogo>
      </LogoContainer>

      <SearchButtonResponsive onClick={Search}>
        <ButtonIcon alt="ícone lupa" src={SearchIcon} />
      </SearchButtonResponsive>

      <SearchContainer openSearch={openSearch}>

        <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
          <img alt="Botão voltar" src={BackButtonIcon} style={{ width: '20px' }} />
        </BackButton>

        <SearchInputContainer>
          <SearchInput
            ref={inputRef}
            value={inputValue}
            placeholder="Pesquisar"
            onChange={(e) => {
              handleInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(inputValue);
                navigate("/search");
                setOpenSearch(false);
              }
            }}
          />
          <ClearButton clearButton={clearButton} onClick={clearInput}>
            <CloseImg src={CloseIcon} />
          </ClearButton>
        </SearchInputContainer>

        <SearchButton
          onClick={() => {
            if (inputValue.trim() === '') {
              alert('Digite alguma palavra chave antes de tentar pesquisar')
              return;
            }
            
            setSearch(inputValue)
            navigate("/search")
          }}
        >
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        {/* margin esta com uma string que define margin nesse contexto do ButtonContainer. */}
        <ButtonContainer margin="0 0 0 10px" >
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

        {login ? (
          <>
            <ButtonContainer margin="0 0 0 10px">AS</ButtonContainer>

            <span onClick={() => logOut()}>Sair</span>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Fazer Login</button>
        )}
        
      </HeaderButton>
    </Container>
  );
}

export default Header;
