import { css } from "@emotion/css";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "rebass";
import Song from "../models/song";
import { add, edit } from "../state/songs/songsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Input from "./Input";
import ShadowBox from "./ShadowBox";
import { RootState } from "../state/store";

interface Props {
  isUpdate: false | boolean;
  toBeUpdatedSong?: Song;
}

const SongForm = ({ isUpdate }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const albumRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const { id } = useParams();

  const song = {} as Song;
  const songs = useSelector((state: RootState) => state.songs.songs);

  if (isUpdate) {
    const currentSong = songs.find((song: Song) => song.id == id);
    console.log(currentSong);
    song.id = currentSong?.id;
    song.albumTitle = currentSong?.albumTitle;
    song.thumbnailUrl = currentSong?.thumbnailUrl;
    song.title = currentSong?.title;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    song.id = isUpdate ? parseInt(id!) : Date.now();
    song.albumTitle = albumRef.current?.value;
    song.thumbnailUrl = thumbnailRef.current?.value;
    song.title = titleRef.current?.value;

    if (isUpdate) {
      dispatch(edit(song));
    } else {
      dispatch(add(song));
    }

    navigate("/");
  };

  return (
    <ShadowBox>
      <Box marginY={4}>
        <Text fontSize="21px">{isUpdate ? "Update Song" : "Add Song"}</Text>
      </Box>
      <form
        className={css`
          width: 100%;
        `}
        onSubmit={handleSubmit}
      >
        <Input
          props={{
            ref: titleRef,
            label: "Song Title",
            placeholder: isUpdate ? song.title : "Song title...",
          }}
        />
        <Input
          props={{
            ref: albumRef,
            label: "Album",
            placeholder: isUpdate ? song.albumTitle : "Album name...",
          }}
        />
        <Input
          props={{
            ref: thumbnailRef,
            label: "Album Thumbnail Link",
            placeholder: isUpdate ? song.thumbnailUrl : "Thumbnail link...",
          }}
        />
        <Flex marginBottom={4} justifyContent={"space-evenly"} width={"100%"}>
          <Button
            css={{
              cursor: "pointer",
              ":hover": {
                scale: "1.05",
              },
              transitionDuration: "100ms",
            }}
            backgroundColor="#8c8c8c"
            marginTop={2}
            width={"130px"}
          >
            Cancel
          </Button>
          <Button
            marginTop={2}
            width={"130px"}
            css={{
              cursor: "pointer",
              ":hover": {
                scale: "1.05",
              },
              transitionDuration: "100ms",
              backgroundImage: "linear-gradient(50deg, #875cf0,#5c93f0)",
            }}
            type="submit"
          >
            {isUpdate ? "Save" : "Add"}
          </Button>
        </Flex>
      </form>
    </ShadowBox>
  );
};

export default SongForm;
