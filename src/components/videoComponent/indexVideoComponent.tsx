import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./stylesVideoComponent";

function VideoComponent({video}: any){
  
  return(
    <Container>
      <ImageBanner src={video.image} />
      <TitleContainer>
        <ChannelImage>
          AS
        </ChannelImage>
        <TextContainer>
          <Title>{video.title}</Title>
          <TextCard>{video.channel}</TextCard>
          <TextCard>{video.views} views - {video.time} ago</TextCard>
        </TextContainer>
      </TitleContainer>

    </Container>

  );
}

export default VideoComponent;