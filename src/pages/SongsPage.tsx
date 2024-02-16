import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Flex } from "rebass";
import NavBar from "../components/NavBar";
import SongsList from "../components/SongsList";
import { useEffect } from "react";
import SongForm from "../components/SongForm";
import { GET_SONGS } from "../redux/types";

const SongsPage = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs);

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, [dispatch]);

  return (
    <Flex
      width={"100%"}
      paddingX={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SongForm isUpdate={false} />
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        width={"90%"}
        maxWidth={"700px"}
        marginTop={5}
        marginLeft={2}
        padding={2}
        bg={"rgba(255,255,255,0.3)"}
        height={"500px"}
      >
        <NavBar />
        <SongsList songs={songs} />
      </Flex>
    </Flex>
  );
};

export default SongsPage;
