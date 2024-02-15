import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Flex } from "rebass";
import NavBar from "../components/NavBar";
import SongsList from "../components/SongsList";
import { getSongs } from "../state/songs/songsSlice";
import { useEffect } from "react";

const SongsPage = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs);

  useEffect(() => {
    dispatch(getSongs());
  }, []);

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
