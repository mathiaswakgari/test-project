import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Flex } from "rebass";
import NavBar from "../components/NavBar";
import SongsList from "../components/SongsList";

const SongsPage = () => {
  const songs = useSelector((state: RootState) => state.songs.songs);
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      width={"70%"}
      maxWidth={"700px"}
      marginTop={5}
      padding={2}
      bg={"rgba(255,255,255,0.3)"}
      height={"700px"}
    >
      <NavBar />
      <SongsList songs={songs} />
    </Flex>
  );
};

export default SongsPage;
