import { useContext } from "react";
import VideoComponent from "../../components/videoComponent/indexVideoComponent";
import { Container } from "./stylesHome";
import { MenuContext } from "../../contexts/openMenuContext";

function Home(){
  const {openMenu, setOpenMenu} = useContext(MenuContext);
  return(
    <Container openMenu={openMenu}>
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      
    </Container>
  );
}

export default Home;