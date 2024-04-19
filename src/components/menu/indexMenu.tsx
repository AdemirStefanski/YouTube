import { Container, MenuItem, ButtonIcon } from "./stylesMenu";

import HomeIcon from "../../assets/home_icon.png"
import ShortsIcon from "../../assets/shorts_icon.png"
import SubIcon from "../../assets/subscription_icon.png"
import YourVideosIcon from "../../assets/yourVideos.png"
import HistoryIcon from "../../assets/history_Icon.png"
import TrendingIcon from "../../assets/trendingIcon3.png"
import MusicIcon from "../../assets/musicNote.png"
import MovieIcon from "../../assets/moviesIcon.png"
import LiveIcon from "../../assets/live_icon.png"
import GamingIcon from "../../assets/gaming_icon.png"
import NewsIcon from "../../assets/news_icon.png"
import SportIcon from "../../assets/sports_icon.png"
import LearningIcon from "../../assets/learning_icon.png"
import PodcastIcon from "../../assets/antenna.png"
import YTPremiumIcon from "../../assets/ytPremium.png"
import YTMusicIcon from "../../assets/YouTubeMusic_Logo.png"
import YTKidsIcon from "../../assets/YouTube_Kids_logo.png"
import SettingsIcon from "../../assets/settings.png"
import ReportIcon from "../../assets/report.png"
import HelpIcon from "../../assets/help.png"
import FeedbackIcon from "../../assets/feedback.png"

import { useNavigate } from "react-router-dom";


const  items = [{name: "Home", link: "/", icon: HomeIcon},
                {name: "Shorts", link: "/shorts", icon: ShortsIcon}, 
                {name: "Subscriptions", link: "/subscriptions", icon: SubIcon},
                {name: "Your channel", link: "/yourchannel", icon: YourVideosIcon},
                {name: "History", link: "/history", icon: HistoryIcon},
                {name: "Trending", link: "/trending", icon: TrendingIcon},
                {name: "Music", link: "/music", icon: MusicIcon},
                {name: "Movies", link: "/movies", icon: MovieIcon},
                {name: "Live", link: "/live", icon: LiveIcon},
                {name: "Gaming", link: "/gaming", icon: GamingIcon},
                {name: "News", link: "/news", icon: NewsIcon},
                {name: "Sports", link: "/sports", icon: SportIcon},
                {name: "Learning", link: "/learning", icon: LearningIcon},
                {name: "Podcasts", link: "/podcasts", icon: PodcastIcon},
                {name: "YouTube Premium", link: "/youTubePremium", icon: YTPremiumIcon},
                {name: "YouTube Music", link: "/youTubeMusic", icon: YTMusicIcon},
                {name: "Youtube Kids", link: "/youTubeKids", icon: YTKidsIcon},
                {name: "Settings", link: "/settings", icon: SettingsIcon},
                {name: "Report history", link: "/reportHistory", icon: ReportIcon},
                {name: "Help", link: "/help", icon: HelpIcon},
                {name: "Send feedback", link: "/sendFeedback", icon: FeedbackIcon},]

//criado para trabalhar com a função de abrir e fechar o Menu.
interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu } : IProps){
  const navigate = useNavigate();
  return(
    <Container openMenu={openMenu}>
      {items.map((item) => (
        <MenuItem openMenu={openMenu} onClick={() =>navigate(item.link)}>
          <ButtonIcon alt="" src={item.icon} />
            <span>
              {item.name}
            </span>
        </MenuItem>
      ))}
    </Container>

  );
}

export default Menu;