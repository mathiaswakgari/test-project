import { css } from "@emotion/css";
import React from "react";
import { Box, Button, Flex, Text } from "rebass";

const SongForm = () => {
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
        >
          Add
        </Button>
      </Flex>
    </Flex>
  );
};

export default SongForm;
