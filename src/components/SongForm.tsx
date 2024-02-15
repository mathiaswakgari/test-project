import { css } from "@emotion/css";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Flex, Text } from "rebass";
import Song from "../models/song";
import { add } from "../state/songs/songsSlice";
import { useNavigate } from "react-router-dom";

const SongForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const albumRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const song = {} as Song;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    song.albumTitle = albumRef.current?.value;
    song.thumbnailUrl = thumbnailRef.current?.value;
    song.title = titleRef.current?.value;

    dispatch(add(song));
    navigate("/");
  };

  return (
    <Flex
      flexDirection={"column"}
      minHeight={"220px"}
      width={"400px"}
      paddingX={4}
      bg={"white"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      css={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      <Box marginY={4}>
        <Text fontSize="21px">Add Song</Text>
      </Box>
      <form
        className={css`
          width: 100%;
        `}
        onSubmit={handleSubmit}
      >
        <Box width={"100%"} flexDirection={"column"} display={"flex"}>
          <label
            className={css`
              padding-bottom: 10px;
              font-size: 13px;
            `}
          >
            Song Title
          </label>
          <input
            className={css`
              height: 35px;
              border: 1px solid gray;
              margin-bottom: 10px;
              &:placeholder {
                color: white;
              }
            `}
            ref={titleRef}
            type="text"
            placeholder="Song title..."
          />
        </Box>
        <Box width={"100%"} flexDirection={"column"} display={"flex"}>
          <label
            className={css`
              padding-bottom: 10px;
              font-size: 13px;
            `}
          >
            Album
          </label>
          <input
            className={css`
              height: 35px;
              border: 1px solid gray;
              margin-bottom: 10px;
            `}
            ref={albumRef}
            type="text"
            placeholder="Album name..."
          />
        </Box>
        <Box width={"100%"} flexDirection={"column"} display={"flex"}>
          <label
            className={css`
              padding-bottom: 10px;
              font-size: 13px;
            `}
          >
            Album Thumbnail Link
          </label>
          <input
            className={css`
              height: 35px;
              border: 1px solid gray;
              margin-bottom: 10px;
            `}
            ref={thumbnailRef}
            type="text"
            placeholder="Thumbnail link..."
          />
        </Box>
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
            Add
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default SongForm;
