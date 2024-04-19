import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/indexHeader";
import Menu from "./components/menu/indexMenu";
import Home from "./pages/home/indexHome";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import YourChannel from "./pages/yourChannel";
import history from "./pages/history";
import Trending from "./pages/trending";
import Music from "./pages/music";
import Movies from "./pages/movies";
import Live from "./pages/live";
import Gaming from "./pages/gaming";
import News from "./pages/news";
import Sports from "./pages/sports";
import Learning from "./pages/learning";
import Podcasts from "./pages/podcasts";
import YouTubePremium from "./pages/youTubePremium";
import YouTubeStudio from "./pages/youTubeStudio";
import YouTubeMusic from "./pages/YouTubeMusic";
import YouTubeKids from "./pages/youTubeKids";
import Settings from "./pages/settings";
import ReportHistory from "./pages/reportHistory";
import Help from "./pages/help";
import SendFeedback from "./pages/sendFeedback";

function App() {

  //simulação de estado global para abrir e fechar menu.
  //como o estado do menu se resume entre aberto e fechado, podemos usar um boolean para isso, aberto(true) e fechado(false).
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <div style={{ width: "100%" , display: "flex"}}>
          {/* passamos indicando se esta aberto ou fechado dentro da variável openMenu. */}
          <Menu openMenu={openMenu} />
          <div style={{ width: "100%", padding: "50px 70px", boxSizing: "border-box", display: "flex", justifyContent: "center" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/yourchannel" element={<YourChannel />} />
              <Route path="/history" element={<history />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/music" element={<Music />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/live" element={<Live />} />
              <Route path="/gaming" element={<Gaming />} />
              <Route path="/news" element={<News />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/youTubePremium" element={<YouTubePremium />} />
              <Route path="/youTubeMusic" element={<YouTubeMusic />} />
              <Route path="/youTubeKids" element={<YouTubeKids />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reportHistory" element={<ReportHistory />} />
              <Route path="/help" element={<Help />} />
              <Route path="/sendFeedback" element={<SendFeedback />} />
              
            </Routes>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
