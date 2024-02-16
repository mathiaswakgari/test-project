import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Box, Button } from "rebass";

import { useDispatch } from "react-redux";
import { DELETE_SONG } from "../redux/types";
import { setSongSlice } from "../state/song/songSlice";
import { Song } from "../models/song";

interface Props {
  song: Song;
}

const SongCardButtons = ({ song }: Props) => {
  const dispatch = useDispatch();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"120px"}
      margin={3}
    >
      <Button
        backgroundColor={"red"}
        onClick={() => dispatch({ type: DELETE_SONG, song: song })}
        css={{
          cursor: "pointer",
          ":hover": {
            scale: "1.03",
            transitionDuration: "200ms",
          },
        }}
      >
        <FaRegTrashAlt />
      </Button>
      <Button
        onClick={() => {
          return dispatch(setSongSlice(song));
        }}
        css={{
          cursor: "pointer",
          ":hover": {
            scale: "1.03",
            transitionDuration: "200ms",
          },
        }}
        backgroundColor={"#065ddf"}
      >
        <MdModeEdit />
      </Button>
    </Box>
  );
};

export default SongCardButtons;
