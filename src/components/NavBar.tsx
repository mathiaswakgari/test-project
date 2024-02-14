import React from "react";
import { IoAdd } from "react-icons/io5";
import { Box, Button, Heading, Flex } from "rebass";

const NavBar = () => {
  return (
    <Box
      css={{
        borderBottom: "solid 2px gray",
      }}
      width={1}
      height={"50px"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading>All Songs</Heading>
        <Button
          bg={"gray"}
          css={{
            borderRadius: "10px",
            color: "white",
            ":hover": {
              scale: "1.1",
              transitionDuration: "400ms",
            },
            cursor: "pointer",
          }}
        >
          <IoAdd fontSize={"20px"} />
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
