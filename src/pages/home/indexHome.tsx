import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Container, MainContainer } from "./stylesHome";
import { useOpenMenu } from "../../contexts/openMenuContext";
import VideoComponent from "../../components/videoComponent/indexVideoComponent";
import CategoryBar from "../../components/categoryBar/indexCategoryBar";
import { useCategoryContext } from "../../contexts/searchCategories";

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

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`;
  //const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=0&key=${API_KEY}`;
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

  
  
   
    

  const { openMenu } = useOpenMenu();

  return (
    <MainContainer openMenu={openMenu}>
      <CategoryBar />
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


export default Home;
