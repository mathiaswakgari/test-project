import { Flex, Text } from "rebass";
import { Song } from "../models/song";
import SongCard from "./SongCard";
interface Props {
  songs: Array<Song>;
}

const SongsList = ({ songs }: Props) => {
  return (
    <Flex
      width={"100%"}
      height={"1000px"}
      flexDirection={"column"}
      alignItems={"center"}
      overflowY={"scroll"}
      marginTop={2}
    >
      {songs.length === 0 ? (
        <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <Text>Empty Collection. Add Song</Text>
        </Flex>
      ) : (
        songs.map((song: Song) => <SongCard song={song} key={song.id} />)
      )}
    </Flex>
  );
};

export default SongsList;
