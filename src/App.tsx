import React from "react";
import { Box, Flex } from "rebass";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Flex justifyContent={"center"}>
      <Box width={"70%"}>
        <NavBar />
      </Box>
    </Flex>
  );
};

export default App;
