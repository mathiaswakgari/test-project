import { Flex } from "rebass";
import { Song } from "../models/song";
import SongCard from "./SongCard";
interface Props {
  songs: Array<Song>;
}

const SongsList = ({ songs }: Props) => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      overflowY={"scroll"}
      marginTop={2}
    >
      {songs.map((song: Song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </Flex>
  );
};

export default SongsList;
