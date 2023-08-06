import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import YouTube from "react-youtube";

const YoutubeCard = (props: { videoId: string }) => {
  const { videoId } = props;
  const opts = {
    height: "300px",
    width: "100%",
  };

  return (
    <Card w={`100%`} overflow={`hidden`} position={`relative`}>
      <CardBody>
        <YouTube
          style={{ objectFit: 'cover',objectPosition: 'center' }}
          videoId={videoId}
          opts={opts}
        />
      </CardBody>
    </Card>
  );
};

export default YoutubeCard;
