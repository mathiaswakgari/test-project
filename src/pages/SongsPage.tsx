import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Flex } from "rebass";

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
      <Flex
        alignItems={"center"}
        width={"100%"}
        maxWidth={"1200px"}
        marginTop={5}
        marginLeft={2}
        padding={2}
        bg={"rgba(255,255,255,0.3)"}
        height={"500px"}
      >
        <SongForm />
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          width={"100%"}
          css={{
            borderLeft: "3px solid rgba(0,0,0,0.1)",
          }}
          paddingLeft={1}
        >
          <SongsList songs={songs} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SongsPage;
