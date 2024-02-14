import React from "react";
import { Flex } from "rebass";
import NavBar from "./components/NavBar";
import SongCard from "./components/SongCard";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Song from "./models/song";
import SongForm from "./components/SongForm";

const App = () => {
  const songs = useSelector((state: RootState) => state.songs.songs);

  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      css={{
        backgroundImage: "linear-gradient(50deg, #34c0eb, #0fa38e)",
      }}
      height={"100vh"}
      fontFamily={"Montserrat"}
    >
      <Flex flexDirection={"column"} alignItems={"center"} width={"70%"}>
        <NavBar />
        {songs.map((song: Song) => (
          <SongCard key={song.albumTitle} />
        ))}
      </Flex>
      <SongForm />
    </Flex>
  );
};

export default App;
