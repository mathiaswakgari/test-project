import React from "react";
import { Flex } from "rebass";
import NavBar from "./components/NavBar";
import SongCard from "./components/SongCard";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Song from "./models/song";

const App = () => {
  const songs = useSelector((state: RootState) => state.songs.songs);

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
        {songs.map((song: Song) => (
          <SongCard key={song.albumTitle} />
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
