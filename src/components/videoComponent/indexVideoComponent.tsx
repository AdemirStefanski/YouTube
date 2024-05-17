import { useOpenMenu } from "../../contexts/openMenuContext";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./stylesVideoComponent";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
}


function VideoComponent(props: Props){
  
  const { openMenu } = useOpenMenu();
  
  return(
    <Container>
      <ImageBanner src={props.thumbnail} openMenu={openMenu} />
      <TitleContainer>
        <ChannelImage>
          {props.channelImage}
        </ChannelImage>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.channelName}</TextCard>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
      </TitleContainer>

    </Container>

  );
}



export default VideoComponent;