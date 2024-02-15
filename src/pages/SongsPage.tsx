import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Flex } from "rebass";
import NavBar from "../components/NavBar";
import Song from "../models/song";
import SongCard from "../components/SongCard";

const SongsPage = () => {
  const songs = useSelector((state: RootState) => state.songs.songs);
  return (
    <Flex flexDirection={"column"} alignItems={"center"} width={"70%"}>
      <NavBar />
      {songs.map((song: Song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </Flex>
  );
};

export default SongsPage;
