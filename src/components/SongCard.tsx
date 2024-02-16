import { Box, Button, Flex, Image, Text } from "rebass";
import { Song } from "../models/song";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DELETE_SONG } from "../redux/types";
import { setSongSlice } from "../state/song/songSlice";

interface Props {
  song: Song;
}

const SongCard = ({ song }: Props) => {
  const dispatch = useDispatch();

  return (
    <Box
      width={"100%"}
      minHeight={"60px"}
      marginY={2}
      css={{
        borderBottom: "2px solid",
        borderBottomColor: "rgba(0,0,0,0.1)",
      }}
      overflow={"hidden"}
    >
      <Flex
        marginX={2}
        width={"100%"}
        height={"90%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} width={[1 / 2.5, 1 / 3, 1 / 2, 1]}>
          <Image minWidth={"30px"} maxWidth={"70px"} src={song.thumbnailUrl} />
          <Box
            marginLeft={3}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            overflowX={"hidden"}
          >
            <Box height={"20px"} overflow={"hidden"}>
              <Text maxWidth={"300px"} fontSize={"16px"}>
                {song.title}
              </Text>
            </Box>
            <Box>
              <Text fontSize={"15px"} color={"#f4f4f4"}>
                Album
              </Text>
            </Box>
          </Box>
        </Flex>
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
      </Flex>
    </Box>
  );
};

export default SongCard;
