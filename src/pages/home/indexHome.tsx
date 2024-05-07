import { useContext, useEffect, useState } from "react";
import VideoComponent from "../../components/videoComponent/indexVideoComponent";
import { Container, MainContainer } from "./stylesHome";
import { MenuContext } from "../../contexts/openMenuContext";
import axios from "axios";
import { useCategoryContext } from "../../contexts/searchCategories";
import moment from "moment";
import CategoryBar from "../../components/categoryBar/indexCategoryBar";

function Home() {
  interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string;
        };
        maxres: {
          url: string;
        };
      };
      channelTitle: string;
      publishedAt: string;
    };
    statistics: {
      viewCount: string;
    };
  }

  const [videos, setVideos] = useState<Videos[]>([]);
  const { categoryId } = useCategoryContext();

  //toda vez que o componente for carregado em tela, vai carregar essa função e monitorar a variável de categoria para toda vez que ela for modificada chamar essa função, que vai fazer a requisição para a API(loadn);
  useEffect(() => {
    load();
  }, [categoryId]);

  const API_KEY = "AIzaSyCZSH9Vjy7vZGn0dVtj5NFW4Oa6TNYlpNo";

  //const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=0&key=${API_KEY}`;
  //função vai tentar uma requisição e caso dê certo ela vai armazenar o resultado na variável de estado setVideos;
  async function load() {
    try {
      const resposta = await axios.get(url);
      setVideos(resposta.data.items);
    } catch (erro) {
      console.log(erro);
    }
  }

  function formatViewCount(viewCount: number): string {
    if (viewCount >= 1000000000) {
      return `${(viewCount / 1000000000).toFixed(0)} bi de visualizações`;
    } else if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)} mil de visualizações`;
    } else {
      return `${viewCount.toFixed(0)} visualizações`;
    }
  }

  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, "days");

    if (diffDays <= 0) {
      return "hoje";
    } else if (diffDays === 1) {
      return "há 1 dia";
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return "há 1 semana";
      } else {
        return `há ${diffWeeks} semanas`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return "há 1 mês";
      } else {
        return `há ${diffMonths} meses`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return "há 1 ano";
      } else {
        return `há ${diffYears} anos`;
      }
    }
  }

  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (
    <MainContainer openMenu={openMenu}>
      <Container openMenu={openMenu}>
        {videos.map((video) => (
          <VideoComponent
            title={video.snippet.title}
            thumbnail={
              video.snippet.thumbnails.maxres?.url ||
              video.snippet.thumbnails.high?.url
            }
            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
            channelName={video.snippet.channelTitle}
            details={`${formatViewCount(
              Number(video.statistics.viewCount)
            )} - ${getPublishedTime(video.snippet.publishedAt)}`}
            key={video.id}
          />
        ))}
      </Container>
    </MainContainer>
  );
}

// const videos = [
//   {
//     image: "https://t.ctcdn.com.br/U_YR-HdYO9L6IB9Cceg1wkOwQC8=/0x50:1911x1127/1911x1075/smart/i342031.jpeg",
//     title: "Queen – Bohemian Rhapsody (Official Video Remastered)",
//     channel: "Queen Official",
//     views: "1.7B",
//     time: "15 years",
//   },
//   {
//     image: "https://exame.com/_next/image/?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FHQmmM_qwG4k%2Fmaxresdefault.jpg&w=828&q=70",
//     title: "Led Zeppelin - Whole Lotta Love (Official Music Video)",
//     channel: "Led Zeppelin",
//     views: "3.4M",
//     time: "16 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/42EevRelxfk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVEu4qahhZmFrFRgbW7kx7nG-xEA",
//     title: "Beggin'",
//     channel: "Måneskin Official",
//     views: "298M",
//     time: "6 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/dElRVQFqj-k/maxresdefault.jpg",
//     title: "Bruno Mars - Marry You (Official Lyric Video)",
//     channel: "Bruno Marsn",
//     views: "99M",
//     time: "3 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/P9BfvPjsXXw/maxresdefault.jpg",
//     title: "Nine Inch Nails - We're In This Together",
//     channel: "Nine Inch Nails",
//     views: "18M",
//     time: "14 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/l9VFg44H2z8/maxresdefault.jpg",
//     title: "Five Finger Death Punch - Wash It All Away (Explicit)",
//     channel: "Five Finger Death Punch",
//     views: "339M",
//     time: "8 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/VMp55KH_3wo/sddefault.jpg",
//     title: "Gente de Zona - La Gozadera (Official Video) ft. Marc Anthony",
//     channel: "Gente de Zona",
//     views: "1.4M",
//     time: "8 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/iywaBOMvYLI/maxresdefault.jpg",
//     title: "System Of A Down - Toxicity (Official HD Video)",
//     channel: "System Of A Down",
//     views: "890M",
//     time: "14 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/j7_lSP8Vc3o/maxresdefault.jpg",
//     title: "2NE1 - 내가 제일 잘 나가(I AM THE BEST) M/V",
//     channel: "2NE1",
//     views: "370M",
//     time: "12 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/9SSUQxGjZZ4/maxresdefault.jpg",
//     title: "Godsmack - Voodoo (Official Music Video)",
//     channel: "Godsmack",
//     views: "109M",
//     time: "14 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/AAbokV76tkU/maxresdefault.jpg",
//     title: "BIGBANG - FANTASTIC BABY M/V",
//     channel: "BIGBANG",
//     views: "548M",
//     time: "12 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/HwMZ20ZVZeE/maxresdefault.jpg",
//     title: "Judas Priest - Invincible Shield (Official Video)",
//     channel: "Judas Priest",
//     views: "1.6M",
//     time: "1 month",
//   },
//   {
//     image: "https://i.ytimg.com/vi/kwoUay_imF0/maxresdefault.jpg",
//     title: "MIYAVI「No Sleep Till Tokyo」Music Video",
//     channel: "MIYAVI",
//     views: "800k",
//     time: "4 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/skl6N3zGv-s/maxresdefault.jpg",
//     title: "Rammstein - Adieu (Official Video)",
//     channel: "Rammstein Official",
//     views: "43M",
//     time: "1 year",
//   },
//   {
//     image: "https://i.ytimg.com/vi/eBG7P-K-r1Y/sddefault.jpg",
//     title: "Foo Fighters - Everlong (Official HD Video)",
//     channel: "Foo Fighters",
//     views: "304M",
//     time: "14 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/pHMH408ltEM/maxresdefault.jpg",
//     title: "ATARASHII GAKKO! - Tokyo Calling (Official Music Video)",
//     channel: "ATARASHII GAKKO!",
//     views: "106M",
//     time: "6 months",
//   },
//   {
//     image: "https://i.ytimg.com/vi/6366dxFf-Os/sddefault.jpg",
//     title: "Arctic Monkeys - Why'd You Only Call Me When You're High? (Official Video)",
//     channel: "Arctic Monkeys",
//     views: "180M",
//     time: "10 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/z0NfI2NeDHI/maxresdefault.jpg",
//     title: "Rammstein - Radio (Official Video)",
//     channel: "Rammstein Official",
//     views: "100M",
//     time: "4 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/989-7xsRLR4/maxresdefault.jpg",
//     title: "Vitas - The 7th Element",
//     channel: "Vitas",
//     views: "52M",
//     time: "5 years",
//   },
//   {
//     image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDeAo6Ko96YcSXn1H-dJaBJ-4zRJA",
//     title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
//     channel: "Rick Astley",
//     views: "1.5B",
//     time: "14 years",
//   }

// ]

// function Home(){
//     const {openMenu, setOpenMenu} = useContext(MenuContext);
//     return(
//         <Container openMenu={openMenu}>
//           {videos.map((video) => (
//               <VideoComponent video={video} />

//             ))}

//     </Container>
//   );
// }

export default Home;
