import { Container, MenuItem, ButtonIcon } from "./stylesMenu";

import HomeIcon from "../../assets/home_icon.png"

const  items = ["Home", "Shorts", "Subscriptions", "Your channel", "History", "Your videos", "Watch later", "Subscriptions", "Trending", "Music", "Movies", "Live", "Gaming", "News", "Sports", "Learning", "Podcasts", "YouTube Premium", "Youtube Studio", "YouTube Music", "Youtube Kids", "Settings", "Report history", "Help", "Send feedback"]

//criado para trabalhar com a função de abrir e fechar o Menu.
interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu } : IProps){
  return(
    <Container openMenu={openMenu}>
      {items.map((item) => (
        <MenuItem openMenu={openMenu}>
          <ButtonIcon alt="" src={HomeIcon} />
            <span>
              {item}
            </span>
        </MenuItem>
      ))}
    </Container>

  );
}

export default Menu;