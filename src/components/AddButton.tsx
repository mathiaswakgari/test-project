import React from "react";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Button } from "rebass";
import { add } from "../state/songs/songsSlice";

const AddButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(add())}
      bg={"#0061b4"}
      css={{
        borderRadius: "10px",
        color: "white",
        ":hover": {
          scale: "1.05",
          transitionDuration: "200ms",
        },
        cursor: "pointer",
      }}
    >
      <IoAdd fontSize={"20px"} />
    </Button>
  );
};

export default AddButton;
