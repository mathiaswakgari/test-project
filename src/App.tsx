import React from "react";
import { Box, Flex } from "rebass";
import NavBar from "./components/NavBar";
import SongCard from "./components/SongCard";

const App = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Flex flexDirection={"column"} alignItems={"center"} width={"70%"}>
        <NavBar />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </Flex>
    </Flex>
  );
};

export default App;
