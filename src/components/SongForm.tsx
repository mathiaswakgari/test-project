import { css } from "@emotion/css";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "rebass";
import Input from "./Input";
import ShadowBox from "./ShadowBox";
import { RootState } from "../redux/store";
import { CREATE_SONG, EDIT_SONG } from "../redux/types";
import { setSongSlice } from "../state/song/songSlice";

const SongForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const albumRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const song = useSelector((state: RootState) => state.song.song);
  const songs = useSelector((state: RootState) => state.songs.songs);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    song.id! > songs.length
      ? dispatch({
          type: CREATE_SONG,
          song: {
            title: titleRef.current?.value,
            thumbnailUrl: thumbnailRef.current?.value,
            albumTitle: albumRef.current?.value,
            id: songs.length + 1,
          },
        })
      : dispatch({
          type: EDIT_SONG,
          song: {
            ...song,
            title: titleRef.current?.value,
            thumbnailUrl: thumbnailRef.current?.value,
            albumTitle: albumRef.current?.value,
          },
        });

    //set song state to initial
    dispatch(
      setSongSlice({
        albumTitle: "",
        title: "",
        thumbnailUrl: "",
        id: 11,
      })
    );

    // clear input fields
    titleRef.current!.value = "";
    albumRef.current!.value = "";
    thumbnailRef.current!.value = "";
  };

  return (
    <ShadowBox>
      <Box marginY={4}>
        <Text fontSize="21px">
          {song.id! <= songs.length ? "Update Song" : "Add Song"}
        </Text>
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
            placeholder:
              song.id! <= songs.length ? song.title : "Song title...",
          }}
        />
        <Input
          props={{
            ref: albumRef,
            label: "Album",
            placeholder:
              song.id! <= songs.length ? song.albumTitle : "Album name...",
          }}
        />
        <Input
          props={{
            ref: thumbnailRef,
            label: "Album Thumbnail Link",

            placeholder:
              song.id! <= songs.length
                ? song.thumbnailUrl
                : "Thumbnail link...",
          }}
        />
        <Flex marginBottom={4} justifyContent={"space-evenly"} width={"100%"}>
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
            {song.id! <= songs.length ? "Save" : "Add"}
          </Button>
        </Flex>
      </form>
    </ShadowBox>
  );
};

export default SongForm;
