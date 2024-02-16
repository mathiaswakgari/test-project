import { css } from "@emotion/css";
import React from "react";
import { Box } from "rebass";

interface Props {
  label: string;
  placeholder?: string;
  ref: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<{ props: Props }> = (props) => {
  return (
    <Box width={"100%"} flexDirection={"column"} display={"flex"}>
      <label
        className={css`
          padding-bottom: 10px;
          font-size: 13px;
        `}
      >
        {props.props.label}
      </label>
      <input
        className={css`
          height: 35px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin-bottom: 10px;
          &:placeholder {
            color: white;
          }
        `}
        ref={props.props.ref}
        type="text"
        placeholder={props.props.placeholder}
      />
    </Box>
  );
};

export default Input;
