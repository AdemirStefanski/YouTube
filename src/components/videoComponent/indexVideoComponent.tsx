import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./stylesVideoComponent";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
}

function VideoComponent(props: Props){
  
  return(
    <Container>
      <ImageBanner src={props.thumbnail} />
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

// function VideoComponent({video}: any){
  
//   return(
//     <Container>
//       <ImageBanner src={video.image} />
//       <TitleContainer>
//         <ChannelImage>
//           AS
//         </ChannelImage>
//         <TextContainer>
//           <Title>{video.title}</Title>
//           <TextCard>{video.channel}</TextCard>
//           <TextCard>{video.views} views - {video.time} ago</TextCard>
//         </TextContainer>
//       </TitleContainer>

//     </Container>

//   );
// }

export default VideoComponent;