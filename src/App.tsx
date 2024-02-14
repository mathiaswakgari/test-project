import React from "react";
import { Flex } from "rebass";
import NavBar from "./components/NavBar";
import SongCard from "./components/SongCard";

const App = () => {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      backgroundColor={"#f2f2f2"}
      height={"100vh"}
      fontFamily={"Montserrat"}
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
