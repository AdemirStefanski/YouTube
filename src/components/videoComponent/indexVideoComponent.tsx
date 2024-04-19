import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./stylesVideoComponent";

function VideoComponent(){
  
  return(
    <Container>
      <ImageBanner src="https://t.ctcdn.com.br/U_YR-HdYO9L6IB9Cceg1wkOwQC8=/0x50:1911x1127/1911x1075/smart/i342031.jpeg" />
      <TitleContainer>
        <ChannelImage>
          AS
        </ChannelImage>
        <TextContainer>
          <Title>Queen – Bohemian Rhapsody (Official Video Remastered)</Title>
          <TextCard>Queen Official</TextCard>
          <TextCard>1.7B views - 15 years ago</TextCard>
        </TextContainer>
      </TitleContainer>

    </Container>

  );
}

export default VideoComponent;