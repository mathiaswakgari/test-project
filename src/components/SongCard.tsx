import React from "react";
import { Box, Flex, Image, Text } from "rebass";
import Song from "../models/song";

interface Props {
  song: Song;
}

const SongCard = ({ song }: Props) => {
  return (
    <Box
      width={"90%"}
      height={"60px"}
      marginY={2}
      css={{
        borderBottom: "2px solid",
        borderBottomColor: "rgba(0,0,0,0.1)",
      }}
    >
      <Flex marginX={2} width={"100%"} height={"90%"} alignItems={"center"}>
        <Image width={"50px"} src={song.thumbnailUrl} />
        <Box
          marginLeft={3}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
        >
          <Text lineHeight={1} overflow={"hidden"} fontSize={"20px"}>
            {song.title}
          </Text>
          <Text color={"white"}>{song.albumTitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SongCard;
