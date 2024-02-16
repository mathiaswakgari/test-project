import { Box, Button, Flex, Image, Text } from "rebass";
import { Song } from "../models/song";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DELETE_SONG, EDIT_SONG } from "../redux/types";
import { setSongSlice } from "../state/song/songSlice";

interface Props {
  song: Song;
}

const SongCard = ({ song }: Props) => {
  const dispatch = useDispatch();

  return (
    <Box
      width={"90%"}
      height={"60px"}
      marginY={2}
      css={{
        borderBottom: "2px solid",
        borderBottomColor: "rgba(0,0,0,0.1)",
      }}
    >
      <Flex
        marginX={2}
        width={"100%"}
        height={"90%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Image width={"50px"} src={song.thumbnailUrl} />
          <Box
            marginLeft={3}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
          >
            <Box height={"25px"} overflow={"hidden"}>
              <Text width={"400px"} fontSize={"18px"}>
                {song.title}
              </Text>
            </Box>
            <Box>
              <Text color={"#f4f4f4"}>Album Title</Text>
            </Box>
          </Box>
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100px"}
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
      </Flex>
    </Box>
  );
};

export default SongCard;
