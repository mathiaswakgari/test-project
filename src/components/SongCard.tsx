import React from "react";
import { Box, Flex, Image, Text } from "rebass";

const SongCard = () => {
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
        <Image
          width={"50px"}
          src="https://upload.wikimedia.org/wikipedia/en/e/ea/Anomaly_%28Lecrae_album%29.jpeg"
        />
        <Box marginLeft={3} height={"100%"}>
          <Text fontSize={"22px"}>Song title</Text>
          <Text color={"gray"}>Album title </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SongCard;
